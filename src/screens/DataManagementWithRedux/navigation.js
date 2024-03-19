import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgileManifesto from "./AgileManifesto";
import DataManagementWithRedux from ".";

const Stack = createNativeStackNavigator();

export default function DataManagementWithReduxNavigation() {
  return (
    <Stack.Navigator initialRouteName="Data Management with Redux">
      <Stack.Screen
        name="Data Management with Redux"
        component={DataManagementWithRedux}
      />
      <Stack.Screen
        name="Agile Manifesto"
        component={AgileManifesto}
        options={{ title: "Agile Manifesto" }}
      />
      <Stack.Screen
        name="Animal Log"
        // TODO Replace with Animal Log component when ready
        component={AgileManifesto}
        options={{ title: "Animal Log" }}
      />
    </Stack.Navigator>
  );
}
