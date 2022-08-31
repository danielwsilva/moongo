import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'flex-end'
  },
  button: {
    flex: 1,
    backgroundColor: theme.colors.none
  },
  container: {
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: theme.colors.white
  }
});
