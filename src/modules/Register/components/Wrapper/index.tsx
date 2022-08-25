import { Keyboard, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { Text } from '../../../../components';
import theme from '../../../../styles/theme';

import { Step } from '../Step';
import styles from './styles';
import { ROUTES } from '../../../../navigation/appRoutes';

type WrapperProps = {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  currentPage: number;
  hasBackButton?: boolean;
  hasCloseButton?: boolean;
};

export const Wrapper = ({
  title,
  subTitle,
  children,
  currentPage,
  hasBackButton = true,
  hasCloseButton = true
}: WrapperProps) => {
  const { colors } = theme;
  const { goBack, dispatch } = useNavigation();

  const handleCloseButton = () => {
    return dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: ROUTES.SIGNIN }]
      })
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {hasBackButton ? (
            <TouchableOpacity onPress={goBack}>
              <MaterialIcons name="arrow-back" size={20} color={colors.black} />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 20 }} />
          )}
          <View style={styles.step}>
            <Step currentPage={currentPage} />
          </View>
          {hasCloseButton ? (
            <TouchableOpacity onPress={handleCloseButton}>
              <MaterialIcons name="close" size={20} color={colors.black} />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 20 }} />
          )}
        </View>

        {title && (
          <Text color={colors.text} fontSize={20} style={styles.title}>
            {title}
          </Text>
        )}

        {subTitle && (
          <Text color={colors.textLight} fontWeight="normal" style={styles.subTitle}>
            {subTitle}
          </Text>
        )}

        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
