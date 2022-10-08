import { memo } from 'react';
import { View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import { Text } from 'components';
import { ExtractResponse } from 'services/api/wallet/types';
import theme from 'styles/theme';
import { maskMoney } from 'utils/helpers';

import { getStyles } from './styles';

type ExtractRowProps = {
  item: ExtractResponse;
};

const ExtractRowComponent = ({ item }: ExtractRowProps) => {
  const { colors } = theme;

  const styles = getStyles({ item });

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {item.type === 'Saque' && <AntDesign name="bank" size={20} color={colors.withdraw} />}
        {item.sub_type === 'Dinheiro' && <Feather name="dollar-sign" size={20} color={colors.withdraw} />}
        {item.type === 'Venda' && item.sub_type === 'PIX' && <AntDesign name="swap" size={20} color={colors.success} />}

        <Text
          fontWeight="normal"
          color={item.type === 'Saque' || item.sub_type === 'Dinheiro' ? colors.withdraw : colors.success}
          fontSize={14}
          style={{ marginLeft: 12 }}
        >
          {item.sub_type === 'Dinheiro' ? item.sub_type : item.type}
        </Text>
      </View>

      <Text
        fontWeight="normal"
        color={item.type === 'Saque' || item.sub_type === 'Dinheiro' ? colors.withdraw : colors.success}
        fontSize={14}
        style={{ marginLeft: 12 }}
      >
        {(item.type === 'Saque' || item.sub_type === 'Dinheiro') && '-'}
        {maskMoney(Number(item.value))}
      </Text>
    </View>
  );
};

export const ExtractRow = memo(ExtractRowComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.item, nextProps.item);
});
