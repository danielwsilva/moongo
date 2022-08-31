import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { Button, Text, Wrapper } from 'components';
import { useCart } from 'hooks/cart';
import { CountCart } from 'modules/Home/components/CountCart';
import { ProductCartRow } from 'modules/Home/components/ProductCartRow';

export const Cart = () => {
  const { cart } = useCart();

  const totalCart = () => {
    return cart.reduce((total, item) => {
      return total + item.supply! * item.price;
    }, 0);
  };

  console.log(cart);

  return (
    <Wrapper title="Carrinho" disabledScrollView action={<CountCart />}>
      <FlashList
        data={cart}
        renderItem={({ item, index }) => <ProductCartRow item={item} indexSeparator={index} />}
        estimatedItemSize={200}
        contentContainerStyle={{ paddingTop: 2, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
        <Text>Total</Text>
        <Text>{totalCart().toFixed(2)}</Text>
      </View>
      <Button style={{ marginBottom: 32 }}>Teste</Button>
    </Wrapper>
  );
};
