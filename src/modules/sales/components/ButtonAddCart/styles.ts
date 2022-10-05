import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RFValue(5),
    width: RFValue(60)
  }
});
