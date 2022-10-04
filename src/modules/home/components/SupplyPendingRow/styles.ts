import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  container: {
    padding: RFValue(10),
    marginBottom: RFValue(14),
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
