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
    marginRight: RFValue(4),
    borderRadius: 8,
    elevation: 3
  },
  input: {
    flex: 1,
    marginLeft: RFValue(6),
    fontFamily: theme.fonts.primary_400
  },
  buttomCountCart: {
    backgroundColor: theme.colors.lightBlack,
    padding: RFValue(12),
    marginLeft: RFValue(5),
    borderRadius: 8
  },
  countProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(32),
    marginBottom: RFValue(14)
  },
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
  },
  list: {
    paddingTop: RFValue(2),
    paddingBottom: RFValue(100)
  }
});
