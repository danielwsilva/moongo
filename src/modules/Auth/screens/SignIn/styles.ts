import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-between', 
    backgroundColor: theme.colors.primary
  },
  wrapper: {
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
    paddingVertical: RFValue(24),
    paddingHorizontal: RFValue(32),
    borderTopLeftRadius: RFValue(24),
    borderTopRightRadius: RFValue(24)
  }
});
