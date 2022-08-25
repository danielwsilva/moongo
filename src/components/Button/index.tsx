import React from 'react';
import { ActivityIndicator, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import theme from '../../styles/theme';
import { Text, TextProps } from '../Text';

import { getStyles } from './styles';

type ButtonProps = TouchableOpacityProps &
  TextProps & {
    loading?: boolean;
    textStyle?: TextStyle;
    type?: 'default' | 'link' | 'dark';
  };

export const Button = ({
  color,
  fontWeight,
  fontSize,
  textStyle,
  style,
  loading,
  disabled,
  children,
  type = 'default',
  ...rest
}: ButtonProps) => {
  const { colors } = theme;
  const styles = getStyles({ type, disabled });

  return (
    <TouchableOpacity {...rest} disabled={disabled} activeOpacity={0.8} style={[styles.container, style]}>
      {loading ? (
        <ActivityIndicator size={24} color={colors.white} />
      ) : (
        <Text color={color || colors.white} fontWeight={fontWeight || 'bold'} fontSize={fontSize} style={textStyle}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};
