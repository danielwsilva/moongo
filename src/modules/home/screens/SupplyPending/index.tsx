import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

import { Text, Wrapper } from 'components';
import { SupplyPendingRow } from 'modules/home/components/SupplyPendingRow';
import { useSupplyPending } from 'services/api/home';
import theme from 'styles/theme';

import styles from './styles';

export const SupplyPending = () => {
  const { colors } = theme;

  const { data } = useSupplyPending();

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <FontAwesome name="opencart" size={32} color={colors.primary} />
      <Text fontWeight="normal" style={{ marginTop: 16, textAlign: 'center' }}>
        Não encontramos nenhuma solicitação de abastecimento :(
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
          renderItem={({ item }) => <SupplyPendingRow item={item} />}
          estimatedItemSize={200}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Wrapper>
  );
};
