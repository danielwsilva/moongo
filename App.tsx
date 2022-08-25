import { StatusBar } from "expo-status-bar";
import { useFonts, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { FormUser } from "./src/modules/Register/screens/FormUser";
import theme from "./src/styles/theme";
import Routes from "./src/navigation/routes";

export default function App() {
  const { colors } = theme;

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.white} translucent={false} />
      { fontsLoaded ? <Routes /> : null}
    </>
  );
}