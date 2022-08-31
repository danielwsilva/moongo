/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
};

export const Wrapper = ({
  children,
  title,
  showHeader = true,
  disabledScrollView = false,
  isLight = true,
  hasBackButton = true,
  hasClose,
  action
}: WrapperProps) => {
  const styles = getStyles();

  const Header = () => (
    <View style={styles.containerHeader}>
      {hasBackButton ? (
        <TouchableOpacity>
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
      <SafeAreaView style={styles.container}>
        {!disabledScrollView ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>{children}</ScrollView>
          </TouchableWithoutFeedback>
        ) : (
          <View style={{ flex: 1 }}>{children}</View>
        )}
      </SafeAreaView>
    </>
  );
};
