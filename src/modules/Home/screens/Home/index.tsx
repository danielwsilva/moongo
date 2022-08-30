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
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  },
  {
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245'
  }
];

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: theme.colors.none, width: '95%' }}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => <ProductRow {...item} />}
          estimatedItemSize={200}
          numColumns={2}
          contentContainerStyle={{ paddingTop: 2, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
