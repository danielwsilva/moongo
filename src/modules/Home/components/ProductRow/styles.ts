import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      elevation: 5,
      backgroundColor: theme.colors.white,
      paddingHorizontal: RFValue(8),
      paddingVertical: RFValue(8),
      borderRadius: RFValue(8),
      marginBottom: RFValue(8),
      marginLeft: RFValue(8)
    },
    image: {
      width: RFValue(136),
      height: RFValue(136)
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

    like: {
      position: 'absolute',
      right: RFValue(2),
      top: RFValue(2),
      height: RFValue(32),
      width: RFValue(32),
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    },
    doubt: {
      position: 'absolute',
      left: RFValue(2),
      top: RFValue(2),
      height: RFValue(32),
      width: RFValue(32),
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    },
    containerModal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 12,
      paddingHorizontal: 24
    }
  });
};
