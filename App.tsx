/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unstable-nested-components */
import { LogBox, View, StyleSheet } from 'react-native';
import GestureHandlerRootView from 'react-native-gesture-handler/src/GestureHandlerRootView';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Text } from 'components';
import { AuthProvider } from 'hooks/auth';
import { CatchProvider } from 'hooks/catch';
import theme from 'styles/theme';
import Routes from './src/navigation/routes';

import './src/config/ReactotronConfig';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

const queryClient = new QueryClient();

type ToastProps = {
  props: {
    title: string;
  };
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  const toastConfig = {
    generic: ({ props }: ToastProps) => (
      <View style={styles.toast}>
        <Text fontWeight="normal" fontSize={14} style={{ textAlign: 'center' }}>
          {props.title}
        </Text>
      </View>
    )
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <CatchProvider>
            <NavigationContainer>
              <AuthProvider>
                <Routes />
              </AuthProvider>
            </NavigationContainer>
            <Toast config={toastConfig} />
          </CatchProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  toast: {
    width: '90%',
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(-18),
    elevation: 3,
    padding: 12
  }
});
