import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Text } from '../../../../components';
import theme from '../../../../styles/theme';

import { getStyles } from './styles';

type RadioButtonProps = {
  placeholder: string;
  textButton?: string;
  link?: () => void;
  onValueChange: () => void;
  active: boolean;
  style?: ViewStyle;
};

export const CheckBox = ({ placeholder, textButton, active, onValueChange, link, style }: RadioButtonProps) => {
  const { colors } = theme;
  const styles = getStyles({ active });

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity activeOpacity={1} onPress={onValueChange}>
        <View style={styles.check}>{active && <Entypo name="check" size={16} color={colors.white} />}</View>
      </TouchableOpacity>

      <Text fontSize={14} fontWeight="normal" color={colors.textLight} style={styles.placeholder}>
        {placeholder}{' '}
        {!!textButton && (
          <Text fontSize={14} fontWeight="bold" color={colors.primary} onPress={link}>
            {textButton}
          </Text>
        )}
      </Text>
    </View>
  );
};
