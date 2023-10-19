import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import EntryNavigation from "./src/navigation/entry";

export default function App() {
  return (
    <NavigationContainer>
      <EntryNavigation />
    </NavigationContainer>
  );
}
