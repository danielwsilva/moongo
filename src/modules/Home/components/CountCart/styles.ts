import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  countCart: {
    position: 'absolute',
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    top: RFValue(-8),
    left: RFValue(-8),
    zIndex: 1
  },
  countCartText: {
    width: '100%',
    marginHorizontal: RFValue(6),
    marginVertical: RFValue(3)
  }
});
