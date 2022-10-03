import { TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { SupplyPendingResponse } from 'services/api/home/types';
import theme from 'styles/theme';

type SupplyPendingRowProps = {
  item: SupplyPendingResponse;
};

export const SupplyPendingRow = ({ item }: SupplyPendingRowProps) => {
  const { colors } = theme;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        padding: 10,
        marginBottom: 14,
        borderLeftWidth: 6,
        borderLeftColor: colors.primary
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text fontSize={14}>Data da solicitação:</Text>
        <Text fontWeight="normal" fontSize={12}>
          {item.created_at.split(' ')[0]}
        </Text>
      </View>
      <Text fontSize={14}>Produtos:</Text>
      <View>
        {item.products.map((prod) => (
          <View key={prod.id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
              - {prod.description}
            </Text>
            <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
              {prod.quantity}
            </Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};
