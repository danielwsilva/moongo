import { LogBox } from 'react-native';
import GestureHandlerRootView from 'react-native-gesture-handler/src/GestureHandlerRootView';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';

import Routes from './src/navigation/routes';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  return <GestureHandlerRootView style={{ flex: 1 }}>{fontsLoaded ? <Routes /> : null}</GestureHandlerRootView>;
}
