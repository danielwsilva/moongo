import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Text } from 'components';
import { ProductRow } from 'modules/Home/components/ProductRow';
import { ROUTES } from 'navigation/appRoutes';
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
  }
];

export const Products = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.white} translucent={false} />
      <TouchableOpacity onPress={() => navigate(ROUTES.SALES_STACK)}>
        <Text>Teste</Text>
      </TouchableOpacity>
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
