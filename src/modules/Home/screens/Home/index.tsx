import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { useQueryClient } from '@tanstack/react-query';
import { Text } from 'components';
import { ROUTES } from 'navigation/appRoutes';
import { useMe, useStockMotorist, useSupplyPending } from 'services/api/home';
import { SupplyPendingProduct, SupplyPendingResponse } from 'services/api/home/types';
import { createStockMotorist } from 'services/api/sales/keys';
import theme from 'styles/theme';

import avatar from 'assets/avatar.png';

import { ButtonAddCart, CountCart, ProductRow } from '../../components';
import styles from './styles';

export const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const { navigate } = useNavigation();
  const { colors } = theme;

  const queryClient = useQueryClient();

  const { data: dataMe } = useMe();
  const { data: dataSupplyPending, refetch: refetchSupplyPending } = useSupplyPending({
    onSettled() {
      queryClient.invalidateQueries(createStockMotorist());
    }
  });

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
              <ButtonAddCart item={item} />
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
