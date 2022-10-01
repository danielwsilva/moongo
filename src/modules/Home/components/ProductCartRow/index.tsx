import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Text } from 'components';
import { useCart } from 'hooks/cart';
import { ProductResponse } from 'services/api/home/types';
import theme from 'styles/theme';

import styles from './styles';

type ProductRowProps = {
  item: ProductResponse;
  handleTotalCart: (_products: ProductResponse[]) => void;
};

export const ProductCartRow = ({ item, handleTotalCart }: ProductRowProps) => {
  const [amount, setAmount] = useState(item.quantity || 0);

  const { cart, updateProduct, removeProduct } = useCart();
  const { colors } = theme;

  const increment = () => {
    let amountAux;

    if (amount < item.stock && amount < item.stock_max) amountAux = amount + 1;
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
      style={{ width: 74, backgroundColor: colors.swipeDelete, justifyContent: 'center', alignItems: 'center' }}
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
          <Image source={{ uri: item.image }} resizeMode="stretch" style={styles.image} />
          <View style={styles.wrapper}>
            <Text fontWeight="bold" fontSize={14} numberOfLines={1}>
              {item.description}
            </Text>
            <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
              {item.brand}
            </Text>
            <View style={styles.Price}>
              <View style={styles.Amount}>
                <TouchableOpacity style={styles.buttonMinus} onPress={decrement}>
                  <AntDesign name="minus" size={20} color={colors.lightBlack} />
                </TouchableOpacity>

                <Text fontWeight="normal" fontSize={14} style={styles.AmountText}>
                  {item.quantity}
                </Text>

                <TouchableOpacity style={styles.buttonPlus} onPress={increment}>
                  <AntDesign name="plus" size={20} color={colors.white} />
                </TouchableOpacity>
              </View>

              <Text fontWeight="bold" fontSize={14}>
                R$ {(item.sale_price * amount).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>

      {item.id !== cart[cart.length - 1].id && <View style={styles.separator} />}
    </>
  );
};
