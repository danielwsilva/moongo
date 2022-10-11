/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, useEffect } from 'react';
import { SectionList, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text, Wrapper } from 'components';
import { WalletSkeleton } from 'modules/wallet/skeletons/WalletSkeleton';
import { ROUTES } from 'navigation/appRoutes';
import { useBalance, useExtract } from 'services/api/wallet';
import { ExtractResponse } from 'services/api/wallet/types';
import theme from 'styles/theme';
import { maskMoney } from 'utils/helpers';

import { ValuesExtract, FilterDate } from '../../components';
import { ExtractRow } from '../../components/ExtractRow';
import styles from './styles';
import { Extract, FILTERS, SectionDataType, SectionListType } from './types';

export const Wallet = () => {
  const [active, setActive] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [extract, setExtract] = useState<SectionDataType[]>([]);

  const { colors } = theme;
  const { navigate } = useNavigation();

  const startDate = new Date();
  const endDate = new Date();

  endDate.setDate(endDate.getDate() + 1);

  const { data: dataBalance, isLoading: isLoadingBalance, refetch: refetchBalance } = useBalance();
  const {
    data: dataExtract,
    isLoading: isLoadingExtract,
    refetch: refetchExtract
  } = useExtract({
    onSuccess(data) {
      filterDate(1, data);
    },
    onSettled() {
      setRefreshing(false);
    }
  });

  const groupBy = useCallback((array: [], key: string) => {
    if (!array) return [];

    const extractGrouping = array.reduce(
      (acc, item) => ({
        ...acc,
        [item[key]]: [...(acc[item[key]] ?? []), item]
      }),
      {}
    ) as Extract;

    return Object.keys(extractGrouping).map((data) => ({
      title: data,
      data: extractGrouping[data]
    }));
  }, []);

  const filterDate = useCallback((value: number, data: ExtractResponse[]) => {
    setActive(value);

    switch (value) {
      case 1:
        startDate.setDate(endDate.getDate() - 8);
        break;
      case 2:
        startDate.setDate(endDate.getDate() - 16);
        break;
      case 3:
        startDate.setDate(endDate.getDate() - 31);
        break;
      default:
        break;
    }

    const extractFiltered = data?.filter((item) => {
      const [day, month, year] = item.created_at.split('/');
      const dateExtract = new Date(Number(year), Number(month), Number(day));
      dateExtract.setMonth(dateExtract.getMonth() - 1);

      return dateExtract > startDate && dateExtract < endDate;
    });

    const results = groupBy(extractFiltered as any, 'created_at');

    setExtract(results);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetchExtract();
    refetchBalance();
  }, [refetchExtract, refetchBalance]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const renderSectionHeader = ({ section: { title } }: SectionListType) => (
    <Text fontWeight="normal" color={colors.textLight} fontSize={14} style={styles.title}>
      {title || '-'}
    </Text>
  );

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <Ionicons name="newspaper" size={48} color={colors.primary} />
      <Text fontWeight="normal" style={{ marginHorizontal: RFValue(24), textAlign: 'center' }}>
        Não existem lançamentos de extrato.
      </Text>
    </View>
  );

  return (
    <Wrapper title="Carteira digital" disabledScrollView hasBackButton={false}>
      <View style={styles.wrapperValueExtract}>
        <ValuesExtract
          description="Saldo da conta"
          value={maskMoney(dataBalance?.balance || 0)}
          loading={loading || isLoadingBalance || refreshing}
        />

        {!!dataBalance?.balance && dataBalance?.balance > 0 && (
          <TouchableOpacity onPress={() => navigate(ROUTES.WALLET_CASH_WITHDRAWAL, { balance: dataBalance?.balance })}>
            <Text fontWeight="bold" color={colors.primary} style={{ marginTop: RFValue(12) }}>
              Resgatar
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.wrapperFilter}>
        {FILTERS.map((item) => (
          <FilterDate
            key={item.id}
            day={item.day}
            active={item.id === active}
            onPress={() => filterDate(item.id, dataExtract!)}
            style={item.id === 1 ? { marginLeft: 0 } : item.id === 3 && { marginRight: 0 }}
          />
        ))}
      </View>

      {refreshing || isLoadingExtract || loading ? (
        <WalletSkeleton />
      ) : (
        <SectionList
          sections={extract}
          onRefresh={onRefresh}
          refreshing={refreshing}
          keyExtractor={(_, indexT) => indexT.toString()}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }) => <ExtractRow item={item} />}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={{ paddingBottom: RFValue(110) }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={listEmptyComponent}
        />
      )}
    </Wrapper>
  );
};
