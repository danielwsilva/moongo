import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: RFValue(24),
    flexDirection: 'row',
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    marginLeft: RFValue(12)
  },
  image: {
    width: RFValue(80),
    height: RFValue(80)
  },
  Price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: RFValue(8)
  },
  Amount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  AmountText: {
    width: RFValue(28),
    textAlign: 'center'
  },
  buttonMinus: {
    backgroundColor: theme.colors.none,
    borderWidth: 1,
    borderColor: theme.colors.lightBlack,
    width: 28,
    height: 28,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonPlus: {
    backgroundColor: theme.colors.lightBlack,
    width: 28,
    height: 28,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderColor: theme.colors.textLight,
    borderStyle: 'dashed',
    marginLeft: RFValue(115)
  }
});
