import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

import { Text } from 'components';
import { Product, useCart } from 'hooks/cart';
import { ProductRow } from 'modules/Home/components/ProductRow';
import theme from 'styles/theme';
import avatar from 'assets/avatar.png';

import styles from './styles';

const DATA = [
  {
    id: '1',
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: 1,
    stockMin: 1,
    stockMax: 4
  },
  {
    id: '2',
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: 2,
    stockMin: 1,
    stockMax: 4
  },
  {
    id: '3',
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: 4,
    stockMin: 1,
    stockMax: 4
  },
  {
    id: '3',
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: '3.51',
    saleNumber: '14.245',
    stock: 1,
    stockMin: 1,
    stockMax: 4
  }
];

export const Home = () => {
  const { cart } = useCart();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.white} translucent={false} />
      <View style={styles.wrapper}>
        <View style={{ marginHorizontal: 8 }}>
          <View style={styles.personalData}>
            <View>
              <Text>Olá,</Text>
              <Text fontSize={20} fontWeight="bold">
                Daniel
              </Text>
            </View>
            <Image source={avatar} resizeMode="stretch" style={styles.avatar} />
          </View>

          <View style={styles.filters}>
            <View style={styles.search}>
              <AntDesign name="search1" color={theme.colors.text} size={18} />
              <TextInput placeholder="Produtos" style={styles.input} />
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <AntDesign name="hearto" color={theme.colors.white} size={18} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              {!!cart.length && (
                <View style={styles.countCart}>
                  <Text fontSize={10} color={theme.colors.white} style={styles.countCartText}>
                    {`${cart.length}`}
                  </Text>
                </View>
              )}

              <AntDesign name="shoppingcart" color={theme.colors.white} size={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.countProduct}>
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
          renderItem={({ item }) => <ProductRow item={item} />}
          estimatedItemSize={200}
          numColumns={2}
          contentContainerStyle={{ paddingTop: 2, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
