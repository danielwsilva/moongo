import { StyleSheet } from 'react-native';

import theme from 'styles/theme';

type Props = {
  width?: number;
  valid: boolean;
  isFocused?: boolean;
  labelColor?: string;
};

const getStyles = ({ width, valid, isFocused }: Props) => {
  const { colors, fonts } = theme;

  return StyleSheet.create({
    container: {
      width,
      paddingBottom: 14
    },
    label: {
      color: !valid ? colors.danger : isFocused ? colors.textLight : colors.textLight,
      fontFamily: fonts.primary_400,
      lineHeight: 20
    },
    inputAndIconContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    input: {
      width: '100%',
      fontFamily: fonts.primary_400,
      borderBottomWidth: 1,
      borderBottomColor: !valid ? colors.danger : colors.lightGray,
      color: !valid ? colors.danger : colors.text,
      fontSize: 16
    },
    rightIconContainer: {
      position: 'absolute',
      right: 8,
      bottom: 6,
      width: 20,
      height: 20
    },
    rightIconButton: {
      width: '100%',
      height: '100%'
    },
    errorText: {
      fontSize: 12,
      color: colors.danger,
      fontFamily: fonts.primary_400
    },
    spacer: {
      fontSize: 12,
      color: colors.none
    }
  });
};

export default getStyles;
