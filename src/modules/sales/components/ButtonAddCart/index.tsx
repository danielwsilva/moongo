import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text } from 'components';
import { useCart } from 'hooks/cart';
import { ProductResponse } from 'services/api/home/types';
import theme from 'styles/theme';

import styles from './styles';

type ButtonAddCartProps = {
  item: ProductResponse;
};

export const ButtonAddCart = ({ item }: ButtonAddCartProps) => {
  const { cart, addProduct } = useCart();

  const productCart = cart.find((p) => p.id === item.id);
  const { colors } = theme;

  const handleAddCart = () => {
    const itemAddCart = { ...item, quantity: 1 };
    addProduct(cart, itemAddCart);
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
        <Text color={colors.white} fontSize={12} style={{ paddingVertical: 2 }}>
          Comprar
        </Text>
      )}
    </TouchableOpacity>
  );
};
