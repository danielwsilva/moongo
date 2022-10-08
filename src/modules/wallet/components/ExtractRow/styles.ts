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
      marginBottom: RFValue(12),
      borderLeftWidth: 5,
      borderColor: item.type === 'Saque' || item.sub_type === 'Dinheiro' ? colors.withdraw : colors.success,
      height: RFValue(38),
      borderRadius: 2
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: RFValue(8)
    }
  });
};
