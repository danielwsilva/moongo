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
  personalData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: RFValue(32)
  },
  avatar: {
    width: RFValue(44),
    height: RFValue(44),
    borderRadius: 44
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
    marginRight: RFValue(10),
    borderRadius: 8,
    elevation: 5
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontFamily: theme.fonts.primary_400
  },
  like: {
    backgroundColor: theme.colors.lightBlack,
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(12),
    borderRadius: 8
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(32),
    marginBottom: RFValue(14)
  }
});
