import { useCallback, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { TabView, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { AntDesign, Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Text, Wrapper } from 'components';
import { ROUTES } from 'navigation/appRoutes';
import { useBalance } from 'services/api/wallet';
import theme from 'styles/theme';
import { maskMoney } from 'utils/helpers';

import { ValuesExtract } from '../../components/ValuesExtract';

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

export const Wallet = () => {
  const [index, setIndex] = useState(0);

  const { navigate } = useNavigation();
  const { data } = useBalance();

  const layout = useWindowDimensions();
  const { colors } = theme;

  const FirstRoute = useCallback(
    () => (
      <>
        <Text color={colors.text} fontSize={16} style={{ marginTop: 12, marginLeft: 4 }}>
          24 de setembro
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            marginHorizontal: 4
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 5, height: 38, backgroundColor: colors.withdraw, borderRadius: 8, marginRight: 8 }} />
            <AntDesign name="bank" size={20} color={colors.withdraw} />

            <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
              Saque
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
            -R$ 12,00
          </Text>
        </View>

        <Text color={colors.text} fontSize={16} style={{ marginTop: 12, marginLeft: 4 }}>
          23 de setembro
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            marginHorizontal: 4
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 5, height: 38, backgroundColor: colors.withdraw, borderRadius: 8, marginRight: 8 }} />
            <Feather name="dollar-sign" size={20} color={colors.withdraw} />

            <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
              Dinheiro
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
            -R$ 3,00
          </Text>
        </View>

        <Text color={colors.text} fontSize={16} style={{ marginTop: 12, marginLeft: 4 }}>
          20 de setembro
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            marginHorizontal: 4
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 5, height: 38, backgroundColor: colors.success, borderRadius: 8, marginRight: 8 }} />
            <AntDesign name="swap" size={20} color={colors.success} />

            <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
              Pix
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
            R$ 10,00
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            marginHorizontal: 4
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 5, height: 38, backgroundColor: colors.withdraw, borderRadius: 8, marginRight: 8 }} />
            <Feather name="dollar-sign" size={20} color={colors.withdraw} />

            <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
              Dinheiro
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
            -R$ 3,00
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            marginHorizontal: 4
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 5, height: 38, backgroundColor: colors.success, borderRadius: 8, marginRight: 8 }} />
            <AntDesign name="swap" size={20} color={colors.success} />

            <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
              Pix
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
            R$ 8,00
          </Text>
        </View>
      </>
    ),
    []
  );

  const SecondRoute = useCallback(
    () => (
      <>
        <Text color={colors.text} fontSize={16} style={{ marginTop: 12, marginLeft: 4 }}>
          20 de setembro
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            backgroundColor: colors.white,
            elevation: 2,
            marginHorizontal: 4,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="swap" size={20} color={colors.success} />

            <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
              Pix
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
            R$ 10,00
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            backgroundColor: colors.white,
            elevation: 2,
            marginHorizontal: 4,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="swap" size={20} color={colors.success} />

            <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
              Pix
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.success} fontSize={14} style={{ marginLeft: 12 }}>
            R$ 8,00
          </Text>
        </View>
      </>
    ),
    []
  );

  const ThirdRoute = useCallback(
    () => (
      <>
        <Text color={colors.text} fontSize={16} style={{ marginTop: 12, marginLeft: 4 }}>
          24 de setembro
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            backgroundColor: colors.white,
            elevation: 2,
            marginHorizontal: 4,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="bank" size={20} color={colors.withdraw} />

            <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
              Saque
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
            -R$ 12,00
          </Text>
        </View>
      </>
    ),
    []
  );

  const FourthRoute = useCallback(
    () => (
      <>
        <Text color={colors.text} fontSize={16} style={{ marginTop: 12, marginLeft: 4 }}>
          23 de setembro
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            backgroundColor: colors.white,
            elevation: 2,
            marginHorizontal: 4,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="dollar-sign" size={20} color={colors.withdraw} />

            <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
              Dinheiro
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
            -R$ 3,00
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            backgroundColor: colors.white,
            elevation: 2,
            marginHorizontal: 4,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 12
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="dollar-sign" size={20} color={colors.withdraw} />

            <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
              Dinheiro
            </Text>
          </View>

          <Text fontWeight="normal" color={colors.withdraw} fontSize={14} style={{ marginLeft: 12 }}>
            -R$ 3,00
          </Text>
        </View>
      </>
    ),
    []
  );

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
        <ValuesExtract description="Saldo da conta" value={maskMoney(data?.balance || 0)} />

        {!!data?.balance && data?.balance > 0 && (
          <TouchableOpacity onPress={() => navigate(ROUTES.WALLET_CASH_WITHDRAWAL, { balance: data?.balance })}>
            <Text fontWeight="bold" color={colors.primary} style={{ marginTop: 12 }}>
              Resgatar
            </Text>
          </TouchableOpacity>
        )}
      </View>

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
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  titleAnimated: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.primary_400,
    textTransform: 'capitalize',
    color: theme.colors.textLight,
    width: '100%'
  },
  tabBar: {
    height: RFValue(42),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
    backgroundColor: theme.colors.white,
    elevation: 0
  }
});
