import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from 'styles/theme';

type Props = {
  hasBackground?: boolean;
};

export const getStyles = ({ hasBackground }: Props) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.lightBlack,
      paddingHorizontal: RFValue(12),
      paddingVertical: RFValue(12),
      marginLeft: hasBackground ? RFValue(5) : 0,
      borderRadius: 8
    },
    countCart: {
      position: 'absolute',
      backgroundColor: theme.colors.primary,
      borderRadius: 50,
      top: hasBackground ? RFValue(3) : RFValue(-8),
      left: hasBackground ? RFValue(3) : RFValue(-8),
      zIndex: 1
    },
    countCartText: {
      width: '100%',
      marginHorizontal: RFValue(6),
      marginVertical: RFValue(3)
    }
  });
};
