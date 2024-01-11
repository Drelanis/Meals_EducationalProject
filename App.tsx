import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesContextProvider } from "@store/context";
import { StackNavigator } from "@components/StackNavigator";

const Stack = createNativeStackNavigator();

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
