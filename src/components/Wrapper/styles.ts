import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: RFValue(18), 
    paddingHorizontal: RFValue(24),
    backgroundColor: theme.colors.white
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  title: {
    marginTop: RFValue(24), 
    marginBottom: RFValue(16)
  },
  subTitle: {
    marginBottom: RFValue(24)
  },
  step: {
    flex: 1, 
    paddingHorizontal: RFValue(20), 
    marginTop: RFValue(-8)
  }
});
