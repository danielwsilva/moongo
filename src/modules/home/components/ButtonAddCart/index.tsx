import { useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
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
  const [product, setProduct] = useState<ProductResponse>({} as ProductResponse);
  const { cart, addProduct } = useCart();

  const { colors } = theme;

  const productCart = useMemo(() => cart.find((p) => p.id === product.id), [cart]);

  const checkStock = () => {
    if (item.stock === 0) return false;
    if (item.stock_motorist >= item.stock_max) return false;
    if (item.stock_motorist > item.stock_min && item.stock_motorist < item.stock_max) return false;
    return true;
  };

  const handleAddCart = () => {
    if (item.supply_pending) {
      Toast.show({
        type: 'generic',
        props: { title: 'Já exite uma solicitação de abastecimento deste produto.' }
      });
    } else {
      const itemAddCart = { ...item, quantity: 1 };
      setProduct(itemAddCart);
      addProduct(cart, itemAddCart);
    }
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
          {item.stock_motorist}
        </Text>
      </View>
    </View>
  );
};
