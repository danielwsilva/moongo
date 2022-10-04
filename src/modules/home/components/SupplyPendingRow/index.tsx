import { TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { SupplyPendingResponse } from 'services/api/home/types';
import theme from 'styles/theme';

import styles from './styles';

type SupplyPendingRowProps = {
  item: SupplyPendingResponse;
};

export const SupplyPendingRow = ({ item }: SupplyPendingRowProps) => {
  const { colors } = theme;

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <View style={styles.date}>
        <Text fontSize={14}>Data da solicitação:</Text>
        <Text fontWeight="normal" fontSize={12}>
          {item.created_at.split(' ')[0]}
        </Text>
      </View>
      <Text fontSize={14}>Produtos:</Text>
      {item.products.map((prod) => (
        <View key={prod.id} style={styles.product}>
          <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
            - {prod.description}
          </Text>
          <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
            {prod.quantity}
          </Text>
        </View>
      ))}
    </TouchableOpacity>
  );
};
