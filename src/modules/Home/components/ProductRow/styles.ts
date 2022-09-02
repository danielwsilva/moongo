import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

type Pros = {
  check: boolean;
  checkStock: () => boolean;
};

export const getStyles = ({ check, checkStock }: Pros) => {
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
    button: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: check ? theme.colors.success : theme.colors.lightBlack,
      padding: RFValue(5),
      marginLeft: RFValue(12)
    },
    stock: {
      flexDirection: 'row',
      backgroundColor: theme.colors.lightBlack,
      borderTopEndRadius: 8,
      borderTopLeftRadius: !checkStock() ? 8 : 0,
      borderBottomEndRadius: 8,
      borderBottomLeftRadius: !checkStock() ? 8 : 0,
      padding: RFValue(5)
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
    }
  });
};
