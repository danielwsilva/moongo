import { memo, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Text } from 'components';
import { Product, useCart } from 'hooks/cart';
import theme from 'styles/theme';

import styles from './styles';

type ProductRowProps = {
  item: Product;
  handleTotalCart: (_products: Product[]) => void;
};

export const ProductCartRowComponent = ({ item, handleTotalCart }: ProductRowProps) => {
  const [amount, setAmount] = useState(item.supply || 0);

  const { cart, updateProduct, removeProduct } = useCart();
  const { colors } = theme;

  const increment = () => {
    let amountAux;

    if (amount < item.stockMax - 1) amountAux = amount + 1;
    else if (item.stock === 0 && amount < item.stockMax) amountAux = amount + 1;
    else amountAux = amount;

    setAmount(updateProduct(item, amountAux));
    handleTotalCart(cart);
  };

  const decrement = () => {
    let amountAux;

    if (amount > 1) amountAux = amount - 1;
    else amountAux = 1;

    setAmount(updateProduct(item, amountAux));
    handleTotalCart(cart);
  };

  const rightSwipe = () => (
    <TouchableOpacity
      onPress={() => removeProduct(item)}
      style={{ width: 74, backgroundColor: theme.colors.swipeDelete, justifyContent: 'center', alignItems: 'center' }}
    >
      <Ionicons name="md-trash-sharp" size={20} color={colors.error} />
      <Text color={colors.error} fontSize={12}>
        Excluir
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Swipeable overshootRight={false} renderRightActions={rightSwipe}>
        <View style={styles.container}>
          <Image source={item.image} resizeMode="stretch" style={styles.image} />
          <View style={styles.wrapper}>
            <Text fontWeight="bold" fontSize={14} numberOfLines={1}>
              {item.name}
            </Text>

            <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
              {item.brad}
            </Text>

            <View style={styles.Price}>
              <View style={styles.Amount}>
                <TouchableOpacity style={styles.buttonMinus} onPress={decrement}>
                  <AntDesign name="minus" size={20} color={colors.lightBlack} />
                </TouchableOpacity>

                <Text fontWeight="normal" fontSize={14} style={styles.AmountText}>
                  {item.supply}
                </Text>

                <TouchableOpacity style={styles.buttonPlus} onPress={increment}>
                  <AntDesign name="plus" size={20} color={colors.white} />
                </TouchableOpacity>
              </View>

              <Text fontWeight="bold" fontSize={14}>
                R$ {(item.price * amount).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>

      {item.id !== cart[cart.length - 1].id && <View style={styles.separator} />}
    </>
  );
};

export const ProductCartRow = memo(ProductCartRowComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.item, nextProps.item);
});
