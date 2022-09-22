/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Text } from 'components/Text';
import theme from 'styles/theme';

import getStyles from './styles';

type WrapperProps = {
  children: React.ReactNode;
  title?: string;
  showHeader?: boolean;
  disabledScrollView?: boolean;
  isLight?: boolean;
  hasBackButton?: boolean;
  hasClose?: boolean;
  action?: React.ReactNode;
  styleContainer?: ViewStyle;
};

export const Wrapper = ({
  children,
  title,
  showHeader = true,
  disabledScrollView = false,
  isLight = true,
  hasBackButton = true,
  hasClose,
  action,
  styleContainer
}: WrapperProps) => {
  const styles = getStyles();

  const { goBack } = useNavigation();

  const Header = () => (
    <View style={styles.containerHeader}>
      {hasBackButton ? (
        <TouchableOpacity onPress={goBack}>
          <AntDesign name="arrowleft" color={theme.colors.primary} size={16} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 16 }} />
      )}

      {title && (
        <Text fontSize={15} numberOfLines={1}>
          {title}
        </Text>
      )}

      {action ? (
        <View>{action}</View>
      ) : hasClose ? (
        <TouchableOpacity>
          <AntDesign name="close" color={theme.colors.text} size={16} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 16 }} />
      )}
    </View>
  );

  return (
    <>
      <StatusBar barStyle={isLight ? 'dark-content' : 'light-content'} backgroundColor={theme.colors.white} />
      {showHeader && <Header />}
      <SafeAreaView style={[styles.container, styleContainer]}>
        {!disabledScrollView ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>{children}</View>
          </TouchableWithoutFeedback>
        )}
      </SafeAreaView>
    </>
  );
};
