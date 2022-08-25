import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

type Props = {
  disabled?: boolean | null | undefined;
}

export const getStyles = ({ disabled }: Props) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? theme.colors.textLight : theme.colors.primary,
      paddingVertical: RFValue(14),
      borderRadius: 8
    }
  });
}