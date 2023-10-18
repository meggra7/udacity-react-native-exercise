import "react-native-gesture-handler";
import TabNavigation from "./src/navigation/tab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
