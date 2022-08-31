import React from 'react';
import { Modal as ModalDefault, ModalProps, View, StatusBar, TouchableOpacity } from 'react-native';
import theme from 'styles/theme';

import styles from './styles';

type Props = ModalProps & {
  height: number;
  close?: () => void;
};

export const Modal = ({ height, close, children, ...rest }: Props) => {
  const { colors } = theme;
  return (
    <ModalDefault {...rest} animationType="fade" transparent statusBarTranslucent onRequestClose={() => null}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={close} />
        <View style={{ ...styles.container, height }}>{children}</View>
      </View>
    </ModalDefault>
  );
};
