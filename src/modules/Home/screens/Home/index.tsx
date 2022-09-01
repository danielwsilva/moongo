import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Text } from 'components';
import { Product, useCart } from 'hooks/cart';
import { CountCart } from 'modules/Home/components/CountCart';
import { ProductRow } from 'modules/Home/components/ProductRow';
import { ROUTES } from 'navigation/appRoutes';
import theme from 'styles/theme';

import amendoim from 'assets/amendoim.png';
import avatar from 'assets/avatar.png';
import kitkat from 'assets/kitkat.png';
import talento_cafe from 'assets/talento-cafe.png';
import talento_castanhas from 'assets/talento-castanhas.png';

import styles from './styles';

const DATA = [
  {
    id: '1',
    name: 'Kit Kat 45G',
    brad: 'Nestle',
    price: 3.51,
    saleNumber: '14.245',
    stock: 1,
    stockMin: 1,
    stockMax: 4,
    image: kitkat
  },
  {
    id: '2',
    name: 'Amendoim Dori',
    brad: 'Dori',
    price: 3.51,
    saleNumber: '14.245',
    stock: 0,
    stockMin: 1,
    stockMax: 4,
    image: amendoim
  },
  {
    id: '3',
    name: 'Talento Café',
    brad: 'Garoto',
    price: 3.51,
    saleNumber: '14.245',
    stock: 1,
    stockMin: 1,
    stockMax: 4,
    image: talento_cafe
  },
  {
    id: '4',
    name: 'Talento Castanhas',
    brad: 'Garoto',
    price: 3.51,
    saleNumber: '14.245',
    stock: 1,
    stockMin: 1,
    stockMax: 4,
    image: talento_castanhas
  }
  // {
  //   id: '5',
  //   name: 'Kit Kat 45G',
  //   brad: 'Nestle',
  //   price: 3.51,
  //   saleNumber: '14.245',
  //   stock: 1,
  //   stockMin: 1,
  //   stockMax: 4,
  //   image: kitkat
  // },
  // {
  //   id: '6',
  //   name: 'Amendoim Dori',
  //   brad: 'Dori',
  //   price: 3.51,
  //   saleNumber: '14.245',
  //   stock: 0,
  //   stockMin: 1,
  //   stockMax: 4,
  //   image: amendoim
  // },
  // {
  //   id: '7',
  //   name: 'Talento Café',
  //   brad: 'Garoto',
  //   price: 3.51,
  //   saleNumber: '14.245',
  //   stock: 1,
  //   stockMin: 1,
  //   stockMax: 4,
  //   image: talento_cafe
  // },
  // {
  //   id: '8',
  //   name: 'Talento Castanhas',
  //   brad: 'Garoto',
  //   price: 3.51,
  //   saleNumber: '14.245',
  //   stock: 1,
  //   stockMin: 1,
  //   stockMax: 4,
  //   image: talento_castanhas
  // }
];

export const Home = () => {
  const { addProduct, removeProduct } = useCart();
  const { navigate } = useNavigation();

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

            <CountCart hasBackground onPress={() => navigate(ROUTES.HOME_STACK)} />
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductRow item={item} removeProduct={removeProduct} addProduct={addProduct} />}
          estimatedItemSize={200}
          numColumns={2}
          contentContainerStyle={{ paddingTop: 2, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
