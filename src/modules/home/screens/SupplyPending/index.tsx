import { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

import { Text, Wrapper } from 'components';
import { useSupplyPending } from 'services/api/home';
import theme from 'styles/theme';

import { SupplyPendingRow } from '../../components';
import styles from './styles';

export const SupplyPending = () => {
  const [refreshing, setRefreshing] = useState(false);

  const { colors } = theme;

  const { data, refetch } = useSupplyPending({
    onSettled() {
      setRefreshing(false);
    }
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
  }, [refetch]);

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <Fontisto name="shopping-bag-1" size={48} color={colors.primary} />
      <Text fontWeight="normal" style={{ marginTop: 16, textAlign: 'center' }}>
        Não existe solicitações de abastecimento pendentes.
      </Text>
    </View>
  );

  return (
    <Wrapper title="Abastecimento pendente" disabledScrollView>
      {!data?.length ? (
        listEmptyComponent()
      ) : (
        <FlashList
          data={data}
          keyExtractor={(_, index) => String(index)}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={({ item }) => <SupplyPendingRow item={item} />}
          estimatedItemSize={200}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Wrapper>
  );
};
