import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import theme from 'styles/theme';
import { Text } from '../Text';

import styles from './styles';

type RadioButtonProps = TouchableOpacityProps & {
  title?: string;
  active: boolean;
};

export const RadioButton = ({ title, active, ...rest }: RadioButtonProps) => {
  const { colors } = theme;

  return (
    <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.8}>
      <View style={styles.radio}>{active && <View style={styles.active} />}</View>

      <Text fontSize={12} fontWeight="normal" color={colors.textLight} style={{ paddingLeft: 4 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
