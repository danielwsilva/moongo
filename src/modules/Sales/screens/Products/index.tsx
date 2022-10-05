import { useCallback, useState } from 'react';
import { TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Text, Wrapper } from 'components';
import { CountCart } from 'modules/home/components/CountCart';
import { ProductRow } from 'modules/home/components/ProductRow';
import { ROUTES } from 'navigation/appRoutes';
import { useStockMotorist } from 'services/api/sales';
import theme from 'styles/theme';

import { ButtonAddCart } from '../../components/ButtonAddCart';
import styles from './styles';

export const Products = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { navigate } = useNavigation();

  const { data, refetch } = useStockMotorist({
    onSettled() {
      setRefreshing(false);
    }
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
  }, [refetch]);

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

          <FlashList
            data={data}
            keyExtractor={(item) => item.id}
            onRefresh={onRefresh}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <ProductRow item={item} showInfo={false}>
                <ButtonAddCart item={item} />
              </ProductRow>
            )}
            estimatedItemSize={200}
            numColumns={2}
            contentContainerStyle={{ paddingTop: 2, paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Wrapper>
  );
};
