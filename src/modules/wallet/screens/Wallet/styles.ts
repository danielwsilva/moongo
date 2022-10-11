import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  wrapperValueExtract: {
    alignItems: 'center',
    marginBottom: RFValue(16)
  },
  wrapperFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    marginTop: RFValue(12),
    marginBottom: RFValue(8)
  },
  listEmpty: {
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
