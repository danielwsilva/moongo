import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

const fontFamily = {
  bold: theme.fonts.primary_700,
  semiBold: theme.fonts.primary_600,
  normal: theme.fonts.primary_400
};

export const getStyles = (fontWeight: 'normal' | 'semiBold' | 'bold', fontSize: number, color: string) =>
  StyleSheet.create({
    text: {
      fontSize: RFValue(fontSize),
      fontFamily: fontFamily[fontWeight],
      color
    }
  });
