import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./tab";
import Entry from "../screens/Entry";
import DataManagementWithReduxNavigation from "../screens/DataManagementWithRedux/navigation";

const Stack = createNativeStackNavigator();

export default function EntryNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Entry} />
      <Stack.Screen name="Lessons One and Two" component={TabNavigation} />
      <Stack.Screen
        name="Lesson Three"
        component={DataManagementWithReduxNavigation}
      />
    </Stack.Navigator>
  );
}
