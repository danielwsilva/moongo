import { useCallback, useState, useEffect, useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Text, Wrapper } from 'components';
import { CountCart } from 'modules/home/components/CountCart';
import { ProductRow } from 'modules/home/components/ProductRow';
import { HomeSkeleton } from 'modules/home/skeletons/HomeSkeleton';
import { ROUTES } from 'navigation/appRoutes';
import { ProductResponse } from 'services/api/home/types';
import { useStockMotorist } from 'services/api/sales';
import theme from 'styles/theme';

import { ButtonAddCart } from '../../components/ButtonAddCart';
import styles from './styles';

export const Products = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const { navigate } = useNavigation();
  const { colors } = theme;

  const { data, isLoading, refetch } = useStockMotorist({
    onSettled() {
      setRefreshing(false);
    }
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
  }, [refetch]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const dataFormatted = useMemo(() => {
    const productFormatted = data?.map((item) => {
      return {
        ...item,
        loading: refreshing
      };
    });

    setProducts(productFormatted!);
    return productFormatted;
  }, [data, refreshing]);

  const handleSearch = (text: string) => {
    const filtered = dataFormatted!.filter((item) => item.description.toUpperCase().includes(text.toUpperCase()));
    setProducts(filtered);
  };

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <AntDesign name="dropbox" size={48} color={colors.primary} />
      <Text fontWeight="normal" style={{ marginTop: 16, textAlign: 'center' }}>
        {dataFormatted?.length !== products.length
          ? `Produto não encontrado :(`
          : `Sua caixa está vazia :( \n\nAdicione produtos realizado o abastecimento.`}
      </Text>
    </View>
  );

  return (
    <Wrapper
      title="Venda dinheiro"
      disabledScrollView
      hasBackButton={false}
      action={<CountCart onPress={() => navigate(ROUTES.HOME_CART)} />}
      styleContainer={{ paddingHorizontal: 0 }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={{ marginHorizontal: 8 }}>
            <View style={styles.search}>
              <AntDesign name="search1" color={theme.colors.text} size={18} />
              <TextInput placeholder="Produtos" style={styles.input} onChangeText={(text) => handleSearch(text)} />
            </View>

            <View style={styles.count}>
              <Text fontWeight="bold" fontSize={14}>
                Produtos
              </Text>
              <Text fontWeight="normal" fontSize={14}>
                {data?.length}
              </Text>
            </View>
          </View>

          {isLoading || loading ? (
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
                  showInfo={false}
                  style={index % 2 === 0 ? { marginLeft: 8, marginRight: 6 } : { marginLeft: 6, marginRight: 8 }}
                >
                  <ButtonAddCart item={item} />
                </ProductRow>
              )}
              estimatedItemSize={200}
              numColumns={2}
              contentContainerStyle={styles.list}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={listEmptyComponent}
            />
          )}
        </View>
      </View>
    </Wrapper>
  );
};
