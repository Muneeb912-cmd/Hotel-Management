import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useColorScheme, AppRegistry } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/presentation/navigation";
import { name as appName } from "./app.json";
import { PaperProvider } from "react-native-paper";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
