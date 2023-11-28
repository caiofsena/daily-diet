import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import { Routes } from "@routes/index";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <ThemeProvider theme={theme}>
          <Routes />
      </ThemeProvider>
  );
}
