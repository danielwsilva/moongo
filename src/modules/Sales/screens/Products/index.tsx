import { StatusBar } from 'expo-status-bar';
import { TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

import { Text } from 'components';
import { ProductRow } from 'modules/Home/components/ProductRow';
import theme from 'styles/theme';

import styles from './styles';

const DATA = [
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: '1'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: '2'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: '2'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: '2'
  }
];

export const Products = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.white} translucent={false} />
      <View style={styles.wrapper}>
        <View style={{ marginHorizontal: 8 }}>
          <View style={styles.filters}>
            <View style={styles.search}>
              <AntDesign name="search1" color={theme.colors.text} size={18} />
              <TextInput placeholder="Produtos" style={styles.input} />
            </View>
          </View>
          <View style={styles.count}>
            <Text fontWeight="bold" fontSize={14}>
              Total de produtos
            </Text>
            <Text fontWeight="normal" fontSize={14}>
              {DATA.length}
            </Text>
          </View>
        </View>

        <FlashList
          data={DATA}
          renderItem={({ item, index }) => <ProductRow item={item} type="vend" like={index === 1 || index === 2} />}
          estimatedItemSize={200}
          numColumns={2}
          contentContainerStyle={{ paddingTop: 2, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
