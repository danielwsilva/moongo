import { StyleProp, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';

import { Text } from 'components';
import theme from 'styles/theme';

import { getStyles } from './styles';

type FilterDateProps = TouchableOpacityProps & {
  day: string;
  active: boolean;
  style?: StyleProp<ViewStyle>;
};

export const FilterDate = ({ day, active, style, ...rest }: FilterDateProps) => {
  const { colors } = theme;
  const styles = getStyles({ active });

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity {...rest} activeOpacity={0.8}>
        <Text fontWeight="normal" color={active ? colors.white : colors.textLight}>
          {day}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
