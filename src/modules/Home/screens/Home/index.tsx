/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unstable-nested-components */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';

import { Text } from 'components';
import { Product, useCart } from 'hooks/cart';
import { CountCart } from 'modules/home/components/CountCart';
import { ProductRow } from 'modules/home/components/ProductRow';
import { ROUTES } from 'navigation/appRoutes';
import { getMe } from 'services/api/home';
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
];

export const Home = () => {
  const { navigate } = useNavigation();
  const { colors } = theme;

  const { data } = useQuery(['@meKey'], getMe);

  const AddCart = ({ item }: { item: Product }) => {
    const [product, setProduct] = useState<Product>({} as Product);
    const { cart, addProduct } = useCart();

    const productCart = cart.find((p) => p.id === product.id);

    const checkStock = () => {
      if (item.stock === item.stockMax) return false;
      if (item.stock === item.stockMin || item.stock === 0) return true;
      if (item.stock > item.stockMin || item.stock < item.stockMax) return false;
      return true;
    };

    const handleAddCart = () => {
      const itemAddCart = { ...item, supply: 1 };
      setProduct(itemAddCart);
      addProduct(cart, itemAddCart);
    };

    return (
      <View style={{ flexDirection: 'row' }}>
        {checkStock() && (
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: productCart?.id === item.id ? colors.success : colors.lightBlack
            }}
            activeOpacity={0.8}
            onPress={() => handleAddCart()}
          >
            <AntDesign name={productCart?.id === item.id ? 'check' : 'plus'} size={20} color={colors.white} />
          </TouchableOpacity>
        )}

        <View
          style={{
            ...styles.stock,
            borderTopLeftRadius: !checkStock() ? 8 : 0,
            borderBottomLeftRadius: !checkStock() ? 8 : 0
          }}
        >
          <AntDesign name="dropbox" size={20} color={colors.white} />
          <Text fontWeight="bold" fontSize={14} color={colors.white} style={styles.textStock}>
            {item.stock}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} translucent={false} />
      <View style={styles.wrapper}>
        <View style={{ marginHorizontal: RFValue(8) }}>
          <View style={styles.personalData}>
            <View>
              <Text>Olá,</Text>
              <Text fontSize={20} fontWeight="bold">
                {data?.name}
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
          renderItem={({ item }) => (
            <ProductRow item={item}>
              <AddCart item={item} />
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
