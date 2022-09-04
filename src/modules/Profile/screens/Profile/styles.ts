import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  avatar: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: 44
  }
});
