import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

export default StyleSheet.create({
  titleAnimated: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.primary_400,
    textTransform: 'capitalize',
    color: theme.colors.textLight,
    width: '100%'
  },
  tabBar: {
    height: RFValue(42),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
    backgroundColor: theme.colors.white,
    elevation: 0
  }
});
