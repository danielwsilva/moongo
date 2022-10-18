import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ExtractResponse } from 'services/api/wallet/types';
import theme from 'styles/theme';

type StylesProps = {
  item: ExtractResponse;
};

export const getStyles = ({ item }: StylesProps) => {
  const { colors } = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: RFValue(-1),
      borderLeftWidth: 2,
      borderColor: item.type === 'Saque' || item.sub_type === 'Dinheiro' ? colors.withdraw : colors.success,
      height: RFValue(48)
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: RFValue(8)
    },
    icon: {
      backgroundColor: colors.textLight,
      borderRadius: 8,
      padding: RFValue(6)
    }
  });
};
