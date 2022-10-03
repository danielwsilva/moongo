/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unstable-nested-components */
import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useMemo } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Text } from 'components';
import { useCart } from 'hooks/cart';
import { CountCart } from 'modules/home/components/CountCart';
import { ProductRow } from 'modules/home/components/ProductRow';
import { ROUTES } from 'navigation/appRoutes';
import { useMe, useStockMotorist, useSupplyPending } from 'services/api/home';
import { ProductResponse, SupplyPendingProduct, SupplyPendingResponse } from 'services/api/home/types';
import theme from 'styles/theme';

import avatar from 'assets/avatar.png';

import styles from './styles';

export const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const { navigate } = useNavigation();
  const { colors } = theme;

  const { data: dataMe } = useMe();
  const { data: dataSupplyPending, refetch: refetchSupplyPending } = useSupplyPending();
  const { data: dataStock, refetch: refetchStock } = useStockMotorist({
    onSettled() {
      setRefreshing(false);
    }
  });

  const supplyPendingNormalized = dataSupplyPending?.reduce(
    (finalArr: SupplyPendingProduct[], item: SupplyPendingResponse) => {
      if (item.products.length) {
        const products = item.products.map((product) => {
          return {
            ...product
          };
        });
        finalArr.push(...products);
      }

      return finalArr;
    },
    []
  );

  const dataStockFormatted = dataStock?.map((stock) => {
    const supplyPending = supplyPendingNormalized?.find((prod) => prod.id === stock.id);

    return {
      ...stock,
      supply_pending: !!supplyPending
    };
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetchStock();
    refetchSupplyPending();
  }, [refetchStock, refetchSupplyPending]);

  const AddCart = ({ item }: { item: ProductResponse }) => {
    const [product, setProduct] = useState<ProductResponse>({} as ProductResponse);
    const { cart, addProduct } = useCart();

    const productCart = useMemo(() => cart.find((p) => p.id === product.id), [cart]);

    const checkStock = () => {
      if (item.stock === 0) return false;
      if (item.stock_motorist >= item.stock_max) return false;
      if (item.stock_motorist > item.stock_min && item.stock_motorist < item.stock_max) return false;
      return true;
    };

    const handleAddCart = () => {
      if (item.supply_pending) {
        Toast.show({
          type: 'generic',
          props: { title: 'Já exite uma solicitação de abastecimento deste produto.' }
        });
      } else {
        const itemAddCart = { ...item, quantity: 1 };
        setProduct(itemAddCart);
        addProduct(cart, itemAddCart);
      }
    };

    return (
      <View style={{ flexDirection: 'row' }}>
        {checkStock() && (
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: productCart?.id === item.id ? colors.success : colors.lightBlack
            }}
            activeOpacity={0.8}
            onPress={() => handleAddCart()}
          >
            <AntDesign name={productCart?.id === item.id ? 'check' : 'plus'} size={20} color={colors.white} />
          </TouchableOpacity>
        )}

        <View
          style={{
            ...styles.stock,
            borderTopLeftRadius: !checkStock() ? 8 : 0,
            borderBottomLeftRadius: !checkStock() ? 8 : 0
          }}
        >
          <AntDesign name="dropbox" size={20} color={colors.white} />
          <Text fontWeight="bold" fontSize={14} color={colors.white} style={styles.textStock}>
            {item.stock_motorist}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} translucent={false} />
      <View style={styles.wrapper}>
        <View style={{ marginHorizontal: RFValue(8) }}>
          <View style={styles.personalData}>
            <View>
              <Text>Olá,</Text>
              <Text fontSize={20} fontWeight="bold">
                {dataMe?.name}
              </Text>
            </View>
            <Image source={avatar} resizeMode="stretch" style={styles.avatar} />
          </View>

          <View style={styles.filters}>
            <View style={styles.search}>
              <AntDesign name="search1" color={colors.text} size={18} />
              <TextInput placeholder="Produtos" style={styles.input} />
            </View>

            <View style={styles.buttomCountCart}>
              <CountCart color={colors.white} onPress={() => navigate(ROUTES.HOME_CART)} />
            </View>
            <View style={styles.buttomCountCart}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(ROUTES.HOME_SUPPLY_PENDING)}>
                {!!dataSupplyPending?.length && (
                  <View style={styles.countCart}>
                    <Text fontSize={10} color={colors.white} style={styles.countCartText}>
                      {`${dataSupplyPending?.length}`}
                    </Text>
                  </View>
                )}
                <MaterialIcons name="pending-actions" size={18} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.countProduct}>
            <Text fontWeight="bold" fontSize={14}>
              Total de produtos
            </Text>
            <Text fontWeight="normal" fontSize={14}>
              {dataStock?.length}
            </Text>
          </View>
        </View>

        <FlashList
          data={dataStockFormatted}
          keyExtractor={(item) => item.id}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <ProductRow item={item}>
              <AddCart item={item} />
            </ProductRow>
          )}
          estimatedItemSize={200}
          numColumns={2}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
