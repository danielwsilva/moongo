import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingTop: RFValue(32)
    },
    containerHeader: {
      height: RFValue(40),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      paddingHorizontal: RFValue(20),
      backgroundColor: theme.colors.white,
      paddingTop: RFValue(16)
    }
  });
};

export default getStyles;
