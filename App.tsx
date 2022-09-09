/* eslint-disable react/no-unstable-nested-components */
import { LogBox, View, StyleSheet } from 'react-native';
import GestureHandlerRootView from 'react-native-gesture-handler/src/GestureHandlerRootView';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Text } from 'components';
import { AuthProvider } from 'hooks/auth';
import theme from 'styles/theme';
import Routes from './src/navigation/routes';

import './src/config/ReactotronConfig';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  const toastConfig = {
    generic: ({ props }: any) => (
      <View style={styles.toast}>
        <Text fontWeight="normal" fontSize={14}>
          {props.title}
        </Text>
      </View>
    )
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>{fontsLoaded ? <Routes /> : null}</AuthProvider>
        <Toast config={toastConfig} />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  toast: {
    height: RFValue(54),
    width: '90%',
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(-18)
  }
});
