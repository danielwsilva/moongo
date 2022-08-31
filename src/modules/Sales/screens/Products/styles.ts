import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: RFValue(16),
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    width: '95%'
  },
  filters: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  search: {
    flex: 1,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(8),
    borderRadius: 8,
    elevation: 5
  },
  input: {
    flex: 1,
    marginLeft: 6,
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
