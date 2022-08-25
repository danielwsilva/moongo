import React, { useCallback, useEffect, useState } from 'react';
import { Platform, View, Text, StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import theme from '../../styles/theme';

import getStyles from './styles';

type InputProps = MaskInputProps & {
  width?: number;
  errorText?: string;
  onChangeText?: (_text: string) => void;
  value: string;
  valid?: boolean;
  disabled?: boolean;
  focus?: () => void;
  styleInput?: StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
  color?: string;
  hasSufix?: boolean;
  isPassword?: boolean;
  sufixIcon?: JSX.Element;
};

export const Input = ({
  width,
  errorText,
  placeholder,
  onChangeText,
  value,
  valid = true,
  disabled = false,
  focus,
  styleInput,
  color,
  hasSufix,
  isPassword,
  sufixIcon,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

  const { colors } = theme;

  const styles = getStyles({ width, valid, isFocused });

  const randomFontSize = useSharedValue(14);
  const randomTopValue = useSharedValue(10);

  const config = {
    duration: 180,
    easing: Easing.linear
  };

  const myStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(randomFontSize.value, config),
      top: withTiming(randomTopValue.value, config)
    };
  });

  const handleFocus = () => {
    setIsFocused(true);
    if (focus) focus();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  const handleSufixPressed = () => {
    setSecurePassword(!securePassword);
  };

  useEffect(() => {
    if (isFocused) {
      randomFontSize.value = 12;
      randomTopValue.value = 0;
    } else {
      randomFontSize.value = 14;
      randomTopValue.value = Platform.OS === `ios` ? 18 : 24;
    }
  }, [isFocused, randomFontSize, randomTopValue]);

  useEffect(() => {
    if (value === `` || value === undefined) {
      return setIsFocused(false);
    }
    return setIsFocused(true);
  }, [value]);

  const Sufix = useCallback(() => {
    if (isPassword) {
      return (
        <TouchableOpacity style={styles.rightIconButton} onPress={handleSufixPressed}>
          <Ionicons
            size={18}
            name={securePassword ? 'eye-off-outline' : 'eye-outline'}
            color={valid ? colors.text : colors.error}
          />
        </TouchableOpacity>
      );
    }

    if (sufixIcon) {
      return sufixIcon;
    }

    return null;
  }, [securePassword, sufixIcon, valid]);

  return (
    <Animated.View style={styles.container}>
      <Animated.Text style={[styles.label, myStyle]}>{placeholder}</Animated.Text>
      <View style={styles.inputAndIconContainer}>
        <MaskInput
          placeholder=""
          editable={!disabled}
          style={[styles.input, styleInput]}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && securePassword}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          selectionColor={color ?? colors.black}
          {...props}
        />
        {hasSufix && (
          <View style={styles.rightIconContainer}>
            <Sufix />
          </View>
        )}
      </View>
      {!valid && <Text style={styles.errorText}>{errorText}</Text>}
    </Animated.View>
  );
};