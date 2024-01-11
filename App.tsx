import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { FavoritesContextProvider } from "@store/context";
import { StackNavigator } from "@components/StackNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <StackNavigator />
      </FavoritesContextProvider>
    </>
  );
}
