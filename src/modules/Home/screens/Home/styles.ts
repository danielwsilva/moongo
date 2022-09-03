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
    elevation: 5
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontFamily: theme.fonts.primary_400
  },
  buttonHeart: {
    backgroundColor: theme.colors.lightBlack,
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(12),
    borderRadius: 8,
    marginLeft: 5
  },
  button: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFValue(5),
    marginLeft: RFValue(12)
  },
  stock: {
    flexDirection: 'row',
    backgroundColor: theme.colors.lightBlack,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    padding: RFValue(5)
  },
  countCart: {
    position: 'absolute',
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    top: RFValue(3),
    left: RFValue(3),
    zIndex: 1
  },
  countCartText: {
    width: '100%',
    marginHorizontal: RFValue(6),
    marginVertical: RFValue(3)
  },
  countProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(32),
    marginBottom: RFValue(14)
  }
});
