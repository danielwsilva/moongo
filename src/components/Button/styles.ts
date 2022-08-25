import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

type Props = {
  disabled?: boolean | null | undefined;
  type: 'default' | 'link' | 'dark';
}

const chooseBackgroundColor = {
  link: theme.colors.none,
  default: theme.colors.primary,
  dark: theme.colors.black
};

export const getStyles = ({ type, disabled }: Props) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? theme.colors.textLight : chooseBackgroundColor[type],
      paddingVertical: RFValue(14),
      borderRadius: 8
    }
  });
}