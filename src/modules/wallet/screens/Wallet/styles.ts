import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

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
  },
  paginationContainer: {
    height: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  dot: {
    height: RFValue(8),
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    marginHorizontal: RFValue(5)
  }
});
