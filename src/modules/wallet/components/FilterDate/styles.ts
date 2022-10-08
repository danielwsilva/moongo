import { StyleSheet } from 'react-native';

import theme from 'styles/theme';

type StylesProps = {
  active: boolean;
};

export const getStyles = ({ active }: StylesProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 8,
      backgroundColor: active ? theme.colors.primary : theme.colors.lightGray1,
      paddingVertical: 10,
      alignItems: 'center',
      marginHorizontal: 4
    }
  });
};
