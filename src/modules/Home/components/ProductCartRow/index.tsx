import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text } from 'components';
import { Product, useCart } from 'hooks/cart';
import theme from 'styles/theme';

import styles from './styles';

type ProductRowProps = {
  item: Product;
  indexSeparator: number;
};

export const ProductCartRow = ({ item, indexSeparator }: ProductRowProps) => {
  const [amount, setAmount] = useState(item.supply || 0);

  const { cart, updateProduct } = useCart();
  const { colors } = theme;

  const increment = () => {
    let amountAux;

    if (amount < item.stockMax - 1) amountAux = amount + 1;
    else if (item.stock === 0 && amount < item.stockMax) amountAux = amount + 1;
    else amountAux = amount;

    setAmount(amountAux);
    updateProduct(item, amountAux);
  };

  const decrement = () => {
    let amountAux;

    if (amount > 1) amountAux = amount - 1;
    else amountAux = 1;

    setAmount(amountAux);
    updateProduct(item, amountAux);
  };

  return (
    <>
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

      {indexSeparator !== cart.length - 1 && <View style={styles.separator} />}
    </>
  );
};
