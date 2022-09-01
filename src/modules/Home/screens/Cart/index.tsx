import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { Button, Text, Wrapper } from 'components';
import { Product, useCart } from 'hooks/cart';
import { CountCart } from 'modules/Home/components/CountCart';
import { ProductCartRow } from 'modules/Home/components/ProductCartRow';

export const Cart = () => {
  const { cart } = useCart();
  const [totalCart, setTotalCart] = useState(0);

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
        renderItem={({ item, index }) => (
          <ProductCartRow item={item} indexSeparator={index} handleTotalCart={handleTotalCart} />
        )}
        estimatedItemSize={200}
        contentContainerStyle={{ paddingTop: 2, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
          <Text fontWeight="normal">Total</Text>
          <Text fontWeight="bold">{`R$ ${totalCart.toFixed(2)}`}</Text>
        </View>
        <Button style={{ marginBottom: 32 }}>Finalizar abastecimento</Button>
      </View>
    </Wrapper>
  );
};
