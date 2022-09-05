import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text } from 'components';
import { useCart } from 'hooks/cart';
import theme from 'styles/theme';

import styles from './styles';

type CountCartProps = TouchableOpacityProps & {
  color?: string;
};

export const CountCart = ({ color, ...rest }: CountCartProps) => {
  const { cart } = useCart();
  const { colors } = theme;

  return (
    <TouchableOpacity {...rest} activeOpacity={0.8}>
      {!!cart.length && (
        <View style={styles.countCart}>
          <Text fontSize={10} color={colors.white} style={styles.countCartText}>
            {`${cart.length}`}
          </Text>
        </View>
      )}

      <AntDesign name="shoppingcart" color={color || colors.text} size={18} />
    </TouchableOpacity>
  );
};
