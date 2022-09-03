import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { Button, Text, Wrapper } from 'components';
import { Product, useCart } from 'hooks/cart';
import { CountCart } from 'modules/Home/components/CountCart';
import { ProductCartRow } from 'modules/Home/components/ProductCartRow';

import styles from './styles';

export const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useCart();

  const handleTotalCart = (products: Product[]) => {
    const totalProducts = products.reduce((total, item) => {
      return total + item.supply! * item.price;
    }, 0);

    setTotalCart(totalProducts);
  };

  useEffect(() => {
    handleTotalCart(cart);
  }, [cart]);

  return (
    <Wrapper title="Carrinho" disabledScrollView action={<CountCart />}>
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
        <Button style={styles.button}>Finalizar</Button>
      </View>
    </Wrapper>
  );
};
