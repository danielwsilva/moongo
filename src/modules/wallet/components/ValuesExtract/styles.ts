import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

const { width } = Dimensions.get('window');

export const getStyles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: RFValue(12)
    },
    line: {
      borderWidth: 2,
      borderColor: theme.colors.text,
      width: width * 0.35
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.45,
      height: 54
    }
  });
