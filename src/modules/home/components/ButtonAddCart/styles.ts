import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  button: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RFValue(2),
    padding: RFValue(5)
  },
  stock: {
    flexDirection: 'row',
    backgroundColor: theme.colors.lightBlack,
    borderRadius: 8,
    padding: RFValue(5)
  },
  textStock: {
    marginLeft: RFValue(10)
  }
});
