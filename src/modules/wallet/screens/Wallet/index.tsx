import { useCallback, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TabView, TabBar, NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                backgroundColor: 'rgba(92, 184, 92, 0.2)',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AntDesign name="plus" size={20} color={colors.success} />
            </View>
            <Text color={colors.success} style={{ marginLeft: 12 }}>
              R$ 92,03
            </Text>
          </View>

          <Text fontSize={13} color={colors.textLight} style={{ marginLeft: 12 }}>
            23/09/2022
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                backgroundColor: 'rgba(92, 184, 92, 0.2)',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <MaterialIcons name="compare-arrows" size={20} color={colors.success} />
            </View>
            <Text color={colors.success} style={{ marginLeft: 12 }}>
              R$ 92,03
            </Text>
          </View>

          <Text fontSize={13} color={colors.textLight} style={{ marginLeft: 12 }}>
            23/09/2022
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 45,
                width: 45,
                borderRadius: 45,
                backgroundColor: 'rgba(239,12,12, 0.2)',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AntDesign name="minus" size={20} color={colors.error} />
            </View>
            <Text color={colors.error} style={{ marginLeft: 12 }}>
              R$ 92,03
            </Text>
          </View>

          <Text fontSize={13} color={colors.textLight} style={{ marginLeft: 12 }}>
            23/09/2022
          </Text>
        </View>
      </>
    ),
    []
  );

  const SecondRoute = useCallback(
    () => (
      <>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View
            key={item}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 45,
                  backgroundColor: 'rgba(92, 184, 92, 0.2)',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <AntDesign name="plus" size={20} color={colors.success} />
              </View>
              <Text color={colors.success} style={{ marginLeft: 12 }}>
                R$ 92,03
              </Text>
            </View>

            <Text fontSize={13} color={colors.textLight} style={{ marginLeft: 12 }}>
              23/09/2022
            </Text>
          </View>
        ))}
      </>
    ),
    []
  );

  const ThirdRoute = useCallback(
    () => (
      <>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View
            key={item}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 45,
                  backgroundColor: 'rgba(92, 184, 92, 0.2)',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <MaterialIcons name="compare-arrows" size={20} color={colors.success} />
              </View>
              <Text color={colors.success} style={{ marginLeft: 12 }}>
                R$ 92,03
              </Text>
            </View>

            <Text fontSize={13} color={colors.textLight} style={{ marginLeft: 12 }}>
              23/09/2022
            </Text>
          </View>
        ))}
      </>
    ),
    []
  );

  const FourthRoute = useCallback(
    () => (
      <>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <View
            key={item}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 45,
                  backgroundColor: 'rgba(239,12,12, 0.2)',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <AntDesign name="minus" size={20} color={colors.error} />
              </View>
              <Text color={colors.error} style={{ marginLeft: 12 }}>
                R$ 92,03
              </Text>
            </View>

            <Text fontSize={13} color={colors.textLight} style={{ marginLeft: 12 }}>
              23/09/2022
            </Text>
          </View>
        ))}
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
          R$ 92,03
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
