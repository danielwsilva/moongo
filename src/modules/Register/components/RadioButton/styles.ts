import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../../../styles/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  radio: {
    width: RFValue(16), 
    height: RFValue(16), 
    borderRadius: 16, 
    borderColor: theme.colors.textLight, 
    borderWidth: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  active: {
    width: RFValue(11), 
    height: RFValue(11), 
    borderRadius: 11, 
    backgroundColor: theme.colors.primary
  }
});
