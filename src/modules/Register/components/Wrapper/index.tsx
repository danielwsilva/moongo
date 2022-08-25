import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';

import { Text } from '../../../../components/Text';
import theme from '../../../../styles/theme';

import { Step } from '../Step';
import styles from './styles';

type WrapperProps = {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  currentPage: number;
};

export const Wrapper = ({ title, subTitle, children, currentPage }: WrapperProps) => {
  const { colors } = theme;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flex: 1 }}>  
          <Step currentPage={currentPage}/>

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
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
