/* eslint-disable react/no-unstable-nested-components */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Text, Wrapper } from 'components';
import { Product, useCart } from 'hooks/cart';
import { CountCart } from 'modules/Home/components/CountCart';
import { ProductRow } from 'modules/Home/components/ProductRow';
import { ROUTES } from 'navigation/appRoutes';
import theme from 'styles/theme';

import amendoim from 'assets/amendoim.png';
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

export const Products = () => {
  const { colors } = theme;
  const { navigate } = useNavigation();

  const AddCart = ({ item }: { item: Product }) => {
    const [product, setProduct] = useState<Product>({} as Product);
    const { cart, addProduct } = useCart();

    const productCart = cart.find((p) => p.id === product.id);

    const handleAddCart = () => {
      const data = { ...item, supply: 1 };
      setProduct(data);
      addProduct(cart, data);
    };

    return (
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: productCart ? colors.success : colors.lightBlack
        }}
        activeOpacity={0.8}
        onPress={() => handleAddCart()}
      >
        {productCart ? (
          <AntDesign name="check" size={20} color={colors.white} />
        ) : (
          <Text color={colors.white} fontSize={12} style={{ paddingVertical: RFValue(2) }}>
            Comprar
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Wrapper
      title="Venda"
      disabledScrollView
      hasBackButton={false}
      action={<CountCart onPress={() => navigate(ROUTES.HOME_CART)} />}
    >
      <View style={styles.container}>
        <StatusBar backgroundColor={theme.colors.white} translucent={false} />
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
                {DATA.length}
              </Text>
            </View>
          </View>

          <FlashList
            data={DATA}
            renderItem={({ item }) => (
              <ProductRow item={item}>
                <AddCart item={item} />
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
