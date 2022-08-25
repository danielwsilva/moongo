import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../../../styles/theme';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: RFValue(18), 
    paddingHorizontal: RFValue(24),
    backgroundColor: theme.colors.white
  },
  title: {
    marginTop: RFValue(24), 
    marginBottom: RFValue(16)
  },
  subTitle: {
    marginBottom: RFValue(24)
  }
});
