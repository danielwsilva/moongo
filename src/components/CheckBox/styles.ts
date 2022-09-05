import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

type Props = {
  active: boolean;
};

export const getStyles = ({ active }: Props) => {
  const { colors } = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    check: {
      width: RFValue(18),
      height: RFValue(18),
      borderRadius: 5,
      borderColor: active ? colors.primary : colors.textLight,
      backgroundColor: active ? colors.primary : colors.white,
      borderWidth: 1.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    placeholder: {
      paddingLeft: RFValue(8),
      marginTop: RFValue(-3)
    }
  });
};
