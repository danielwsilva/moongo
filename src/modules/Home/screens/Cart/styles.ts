import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  list: {
    paddingTop: RFValue(2),
    paddingBottom: RFValue(48)
  },
  footer: {
    paddingHorizontal: RFValue(24)
  },
  totalText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFValue(12)
  },
  button: {
    marginBottom: RFValue(32)
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RFValue(24)
  },
  modalWrapperButton: {
    flexDirection: 'row',
    marginTop: RFValue(18)
  },
  modalButton: {
    flex: 1,
    marginHorizontal: RFValue(8)
  }
});
