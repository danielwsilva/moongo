import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text } from 'components';
import { useCart } from 'hooks/cart';

import theme from 'styles/theme';
import { getStyles } from './styles';

type CountCartProps = TouchableOpacityProps & {
  hasBackground?: boolean;
};

export const CountCart = ({ hasBackground = false, ...rest }: CountCartProps) => {
  const { cart } = useCart();
  const { colors } = theme;

  const styles = getStyles({ hasBackground });

  return (
    <TouchableOpacity {...rest} activeOpacity={0.8} style={hasBackground ? styles.button : {}}>
      {!!cart.length && (
        <View style={styles.countCart}>
          <Text fontSize={10} color={colors.white} style={styles.countCartText}>
            {`${cart.length}`}
          </Text>
        </View>
      )}

      <AntDesign name="shoppingcart" color={hasBackground ? colors.white : colors.text} size={18} />
    </TouchableOpacity>
  );
};
