import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  navigator: {
    backgroundColor: theme.colors.white,
    height: RFValue(60),
    marginBottom: RFValue(12),
    marginHorizontal: RFValue(12),
    position: 'absolute',
    borderRadius: 24
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
