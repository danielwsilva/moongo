import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export const getStyles = (valid: boolean) => {
  const { colors, fonts } = theme;

  return StyleSheet.create({
    text: {
      width: RFValue(50),
      height: RFValue(50),
      lineHeight: RFValue(50),
      fontSize: RFValue(36),
      textAlign: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: valid ? colors.lightGray : colors.error,
      color: valid ? colors.primary : colors.error,
      fontFamily: fonts.primary_700
    },
    errorText: {
      marginTop: 2,
      marginLeft: 2
    },
    countDownContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: RFValue(14)
    },
    digitStyle: {
      width: 'auto',
      height: 'auto',
      marginHorizontal: 1
    },
    digitTxtStyle: {
      fontSize: RFValue(16),
      color: colors.primary,
      fontWeight: '700'
    }
  });
};
