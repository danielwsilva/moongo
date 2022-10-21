import { StatusBar } from 'expo-status-bar';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useQueryClient } from '@tanstack/react-query';
import { Skeleton } from 'moti/skeleton';

import { Text } from 'components';
import { HomeSkeleton } from 'modules/home/skeletons/HomeSkeleton';
import { ROUTES } from 'navigation/appRoutes';
import { useMe, useStockMotorist, useSupplyPending } from 'services/api/home';
import { ProductResponse, SupplyPendingProduct, SupplyPendingResponse } from 'services/api/home/types';
import { createStockMotorist } from 'services/api/sales/keys';
import theme from 'styles/theme';

import { ButtonAddCart, CountCart, ProductRow } from '../../components';
import styles from './styles';

export const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();
  const { colors } = theme;

  const queryClient = useQueryClient();

  const { data: dataMe, isLoading: isLoadingMe } = useMe();

  const {
    data: dataSupplyPending,
    refetch: refetchSupplyPending,
    isLoading: isLoadingSupplyPending
  } = useSupplyPending({
    onSettled() {
      queryClient.invalidateQueries(createStockMotorist());
    }
  });

  const {
    data: dataStock,
    refetch: refetchStock,
    isLoading: isLoadingStockMotorist
  } = useStockMotorist({
    onSettled() {
      setRefreshing(false);
    }
  });

  const supplyPendingNormalized = useMemo(
    () =>
      dataSupplyPending?.reduce((finalArr: SupplyPendingProduct[], item: SupplyPendingResponse) => {
        if (item.products.length) {
          const arrayProduct = item.products.map((product) => {
            return {
              ...product
            };
          });
          finalArr.push(...arrayProduct);
        }

        return finalArr;
      }, []),
    [dataSupplyPending]
  );

  const dataStockFormatted = useMemo(() => {
    const productFormatted = dataStock?.map((stock) => {
      const supplyPending = supplyPendingNormalized?.find((prod) => prod.id === stock.id);

      return {
        ...stock,
        supply_pending: !!supplyPending,
        loading: refreshing
      };
    });

    setProducts(productFormatted!);
    return productFormatted;
  }, [dataStock, supplyPendingNormalized, refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetchStock();
    refetchSupplyPending();
  }, [refetchStock, refetchSupplyPending]);

  const handleSearch = (text: string) => {
    const filtered = dataStockFormatted!.filter((item) => item.description.toUpperCase().includes(text.toUpperCase()));
    setProducts(filtered);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <AntDesign name="dropbox" size={48} color={colors.primary} />
      <Text fontWeight="normal" style={{ marginTop: 16, textAlign: 'center' }}>
        Produto não encontrado :(
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} translucent={false} />
      <View style={styles.wrapper}>
        <View style={{ marginHorizontal: RFValue(8) }}>
          <View style={styles.personalData}>
            <View>
              <Text>Olá,</Text>
              <Skeleton colorMode="light" width={100} show={isLoadingMe || loading}>
                <Text fontSize={20} fontWeight="bold">
                  {dataMe?.name.split(' ')[0]}
                </Text>
              </Skeleton>
            </View>

            <Skeleton radius="round" colorMode="light" height={50} show={isLoadingMe || loading}>
              <View style={styles.avatar}>
                <Text fontSize={28} color={colors.white}>
                  {dataMe?.name.slice(0, 1)}
                </Text>
              </View>
            </Skeleton>
          </View>

          <View style={styles.filters}>
            <View style={styles.search}>
              <AntDesign name="search1" color={colors.text} size={18} />
              <TextInput placeholder="Produtos" style={styles.input} onChangeText={(text) => handleSearch(text)} />
            </View>

            <View style={styles.buttomCountCart}>
              <CountCart color={colors.white} onPress={() => navigate(ROUTES.HOME_CART)} />
            </View>

            <View style={{ marginLeft: RFValue(5) }}>
              <Skeleton colorMode="light" show={isLoadingSupplyPending || refreshing || loading}>
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
              </Skeleton>
            </View>
          </View>

          <View style={styles.countProduct}>
            <Text fontWeight="bold" fontSize={14}>
              Produtos
            </Text>
            <Text fontWeight="normal" fontSize={14}>
              {dataStock?.length}
            </Text>
          </View>
        </View>

        {isLoadingStockMotorist || loading ? (
          <HomeSkeleton />
        ) : (
          <FlashList
            data={products}
            keyExtractor={(item) => item.id}
            onRefresh={onRefresh}
            refreshing={refreshing}
            renderItem={({ item, index }) => (
              <ProductRow
                item={item}
                style={index % 2 === 0 ? { marginLeft: 8, marginRight: 6 } : { marginLeft: 6, marginRight: 8 }}
              >
                <ButtonAddCart item={item} />
              </ProductRow>
            )}
            estimatedItemSize={200}
            numColumns={2}
            contentContainerStyle={styles.list}
            ListEmptyComponent={listEmptyComponent}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
