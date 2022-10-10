import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  avatar: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: 44,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: RFValue(10)
  },
  icon: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: 40,
    elevation: 5,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RFValue(16)
  },
  iconChevron: {
    width: RFValue(30),
    height: RFValue(30),
    borderRadius: 30,
    elevation: 3,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.lightGray,
    marginTop: RFValue(4)
  }
});
