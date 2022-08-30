/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'components';
import { ROUTES } from 'navigation/appRoutes';
import theme from 'styles/theme';

import { MENU_ROUTES } from './consts';
import styles from './styles';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const { colors } = theme;

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.navigator
      }}
    >
      {MENU_ROUTES.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: () => null,
            tabBarButton: (props: any) => {
              const { onPress } = props;
              return <Pressable {...props} onPress={() => onPress()} />;
            },
            tabBarIcon: ({ focused }) => (
              <View style={styles.content}>
                <Feather name={item.iconName} size={item.size} color={focused ? colors.primary : colors.textLight} />
                <Text
                  fontWeight="normal"
                  fontSize={12}
                  color={focused ? colors.primary : colors.textLight}
                  style={{ marginTop: 2, textAlign: 'center' }}
                >
                  {item.textBottomBar}
                </Text>
              </View>
            )
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;
