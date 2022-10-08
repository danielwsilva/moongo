import { useCallback, useState } from 'react';
import { SectionList, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TabView, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Text, Wrapper } from 'components';
import { ROUTES } from 'navigation/appRoutes';
import { useBalance, useExtract } from 'services/api/wallet';
import { ExtractResponse } from 'services/api/wallet/types';
import theme from 'styles/theme';
import { maskMoney } from 'utils/helpers';

import { ValuesExtract } from '../../components/ValuesExtract';
import styles from './styles';

const routes = [
  { key: 'first', title: 'Todos' },
  { key: 'second', title: 'Venda' },
  { key: 'fourth', title: 'Dinheiro' },
  { key: 'third', title: 'Saque' }
];

export type MaisCashNavigationTabState = NavigationState<{
  key: string;
  title: string;
}>;

export type Extract = {
  [key: string]: {
    type: string;
    sub_type: string;
    value: number;
    created_at: string;
  }[];
};

export type SectionListType = { section: { title: string } };

export const Wallet = () => {
  const [index, setIndex] = useState(0);

  const { colors } = theme;
  const { navigate } = useNavigation();
  const layout = useWindowDimensions();

  const { data: dataBalance } = useBalance();
  const { data: dataExtract, isLoading } = useExtract();

  const groupBy = (array: [], key: string) => {
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
  };

  const renderSectionHeader = ({ section: { title } }: SectionListType) => (
    <Text fontWeight="normal" color={colors.textLight} fontSize={14} style={{ marginTop: 12, marginBottom: 8 }}>
      {title || '-'}
    </Text>
  );

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        marginHorizontal: 4
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 5, height: 38, backgroundColor: colors.withdraw, borderRadius: 8, marginRight: 8 }} />
        <AntDesign name="bank" size={20} color={colors.withdraw} />

        <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
          {`${item.type} | ${item.sub_type}`}
        </Text>
      </View>

      <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
        {maskMoney(Number(item.value))}
      </Text>
    </View>
  );

  const FirstRoute = useCallback(
    () => (
      <SectionList
        sections={groupBy(dataExtract, 'created_at')}
        keyExtractor={(_, indexT) => indexT.toString()}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    ),
    []
  );

  const SecondRoute = useCallback(() => <View />, []);

  const ThirdRoute = useCallback(() => <View />, []);

  const FourthRoute = useCallback(() => <View />, []);

  const renderScene = ({ route }: { route: { key: string; title: string } }): JSX.Element => {
    switch (route.key) {
      case 'first':
        return FirstRoute();
      case 'second':
        return SecondRoute();
      case 'third':
        return ThirdRoute();
      case 'fourth':
        return FourthRoute();
      default:
        return <View />;
    }
  };

  const renderTabBar = useCallback((props: SceneRendererProps & { navigationState: MaisCashNavigationTabState }) => {
    return (
      <TabBar
        {...props}
        pressColor="transparent"
        indicatorStyle={{ backgroundColor: colors.primary }}
        labelStyle={styles.titleAnimated}
        style={styles.tabBar}
        activeColor={colors.primary}
      />
    );
  }, []);

  return (
    <Wrapper title="Carteira digital" disabledScrollView hasBackButton={false}>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        <ValuesExtract description="Saldo da conta" value={maskMoney(dataBalance?.balance || 0)} />

        {!!dataBalance?.balance && dataBalance?.balance > 0 && (
          <TouchableOpacity onPress={() => navigate(ROUTES.WALLET_CASH_WITHDRAWAL, { balance: dataBalance?.balance })}>
            <Text fontWeight="bold" color={colors.primary} style={{ marginTop: 12 }}>
              Resgatar
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {!isLoading && (
        <TabView
          style={{ backgroundColor: colors.white }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
          overScrollMode="never"
          swipeEnabled={false}
        />
      )}
    </Wrapper>
  );
};
