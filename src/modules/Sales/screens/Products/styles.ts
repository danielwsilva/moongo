import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    width: '95%'
  },
  search: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: RFValue(8),
    borderRadius: 8,
    elevation: 3
  },
  input: {
    flex: 1,
    marginLeft: RFValue(6),
    fontFamily: theme.fonts.primary_400
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(32),
    marginBottom: RFValue(14)
  }
});
