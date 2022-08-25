import React from 'react';
import { StyleProp, Text as DefaultText, TextProps as TextPropsDefault, TextStyle } from 'react-native';

import theme from '../../styles/theme';

import { getStyles } from './styles';

export type TextProps = TextPropsDefault & {
  style?: TextStyle;
  fontWeight?: 'normal' | 'semiBold' | 'bold';
  fontSize?: number;
  color?: string;
};

export const Text = ({
  style,
  fontWeight = 'semiBold', 
  fontSize = 16, 
  color = theme.colors.text, 
  children, 
  ...props 
}: TextProps) => {
  const styles = getStyles(fontWeight, fontSize, color);
  const newStyle = style as TextStyle;
  const fontStyle: StyleProp<TextStyle> = { ...styles.text, ...newStyle };

  return (
    <DefaultText {...props} style={{...styles.text, ...fontStyle}} >
      {children}
    </DefaultText>
  );
};
