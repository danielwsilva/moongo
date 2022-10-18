import { StyleSheet } from 'react-native';

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
