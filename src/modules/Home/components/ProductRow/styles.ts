import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

export default StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: theme.colors.white,
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(8),
    borderRadius: RFValue(16),
    marginBottom: RFValue(8),
    marginLeft: RFValue(8)
  },
  image: {
    width: RFValue(136),
    height: RFValue(136)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(4)
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lightBlack,
    width: RFValue(32),
    height: RFValue(32)
  }
});
