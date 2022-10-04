import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  list: {
    paddingBottom: RFValue(48)
  },
  listEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFValue(24)
  }
});
