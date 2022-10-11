import { useCallback, useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Text, Wrapper } from 'components';
import { CountCart } from 'modules/home/components/CountCart';
import { ProductRow } from 'modules/home/components/ProductRow';
import { HomeSkeleton } from 'modules/home/skeletons/HomeSkeleton';
import { ROUTES } from 'navigation/appRoutes';
import { useStockMotorist } from 'services/api/sales';
import theme from 'styles/theme';

import { ButtonAddCart } from '../../components/ButtonAddCart';
import styles from './styles';

export const Products = () => {
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

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <AntDesign name="dropbox" size={48} color={colors.primary} />
      <Text fontWeight="normal" style={{ marginTop: 16, textAlign: 'center' }}>
        Sua caixa está vazia :( {`\n\n`}Adicione produtos realizado o abastecimento.
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
              <TextInput placeholder="Produtos" style={styles.input} />
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
              data={data}
              keyExtractor={(item) => item.id}
              onRefresh={onRefresh}
              refreshing={refreshing}
              renderItem={({ item }) => (
                <ProductRow item={item} showInfo={false} loading={refreshing}>
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
