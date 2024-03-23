import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/Welcome";
import AddAnimal from "./screens/animals/New";
import AnimalsList from "./screens/animals/List";
import EditAnimal from "./screens/animals/Edit";

const Stack = createNativeStackNavigator();

const AnimalLogNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Welcome"}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Add Animal" component={AddAnimal} />
      <Stack.Screen name="Edit Animal" component={EditAnimal} />
      <Stack.Screen name="Animals" component={AnimalsList} />
    </Stack.Navigator>
  );
};

export default AnimalLogNavigation;
