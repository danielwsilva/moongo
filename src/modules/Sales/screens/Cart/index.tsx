import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

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
  }
];

export const Cart = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.white} translucent={false} />
      <View style={styles.wrapper}>
        <FlashList
          data={DATA}
          renderItem={({ item, index }) => <ProductRow item={item} like={index === 1 || index === 2} />}
          estimatedItemSize={200}
          numColumns={2}
          contentContainerStyle={{ paddingTop: 2, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
