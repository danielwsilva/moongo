import { useCallback, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TabView, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

import { Text, Wrapper } from 'components';
import theme from 'styles/theme';

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
        // tabStyle={{ width: 'auto' }}
        activeColor={colors.primary}
        // scrollEnabled
      />
    );
  }, []);

  return (
    <Wrapper title="Carteira digital" disabledScrollView hasBackButton={false}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text fontWeight="normal" style={{ marginTop: 20 }}>
          Saldo disponível
        </Text>
        <Text fontWeight="bold" fontSize={32} style={{ marginTop: 12 }}>
          R$ 00,00
        </Text>
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
