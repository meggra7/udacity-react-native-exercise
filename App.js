import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import EntryNavigation from "./src/navigation/entry";
import { Provider } from "react-redux";
import initializeStore from "./src/store";

const store = initializeStore();

export default function App() {
  return (
    // Wrapping the app in the provider provides access to the Redux store from anywhere in the app
    <Provider store={store}>
      <NavigationContainer>
        <EntryNavigation />
      </NavigationContainer>
    </Provider>
  );
}
