import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { Button, Text, Wrapper } from 'components';
import { useCart } from 'hooks/cart';

import { useSupply } from 'services/api/home';
import { ProductResponse } from 'services/api/home/types';
import { CountCart } from '../../components/CountCart';
import { ProductCartRow } from '../../components/ProductCartRow';
import styles from './styles';

export const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [totalQuantityCart, setTotalQuantityCart] = useState(0);

  const { cart } = useCart();
  const { mutate, isLoading } = useSupply();

  const handleTotalCart = (products: ProductResponse[]) => {
    const totalProducts = products.reduce((total, item) => {
      return total + item.quantity * item.sale_price;
    }, 0);

    const totalQuantityProducts = products.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalQuantityCart(totalQuantityProducts);
    setTotalCart(totalProducts);
  };

  const onSubmit = () => {
    const objSupply = {
      movement: 'Carro',
      quantity: totalQuantityCart,
      cost: totalCart,
      products: cart.map((item) => {
        return {
          product: item.id,
          percentage: item.percentage,
          quantity: item.quantity,
          price: item.sale_price
        };
      })
    };

    mutate(objSupply);
  };

  useEffect(() => {
    handleTotalCart(cart);
  }, [cart]);

  return (
    <Wrapper title="Carrinho" disabledScrollView action={<CountCart />} styleContainer={{ paddingHorizontal: 0 }}>
      <FlashList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCartRow item={item} handleTotalCart={handleTotalCart} />}
        estimatedItemSize={200}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <View style={styles.totalText}>
          <Text fontWeight="normal">Total</Text>
          <Text fontWeight="bold">{`R$ ${totalCart.toFixed(2)}`}</Text>
        </View>
        <Button style={styles.button} onPress={onSubmit} disabled={!cart.length} loading={isLoading}>
          Finalizar
        </Button>
      </View>
    </Wrapper>
  );
};
