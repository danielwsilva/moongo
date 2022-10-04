import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: RFValue(8),
    marginBottom: RFValue(8),
    marginLeft: RFValue(8),
    borderRadius: 8,
    elevation: 5
  },
  doubt: {
    position: 'absolute',
    right: RFValue(2),
    top: RFValue(2),
    height: RFValue(32),
    width: RFValue(32),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  containerImage: {
    width: RFValue(136),
    height: RFValue(136),
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: RFValue(100),
    height: RFValue(100)
  },
  wrapperText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RFValue(4)
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(24)
  }
});
