import { LogBox } from 'react-native';
import GestureHandlerRootView from 'react-native-gesture-handler/src/GestureHandlerRootView';

import { useFonts, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from 'hooks/auth';
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

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>{fontsLoaded ? <Routes /> : null}</AuthProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
