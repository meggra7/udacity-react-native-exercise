import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MobileScreensAndStylingExerciseOne from "./src/screens/MobileScreensAndStyling/ExerciseOne";
import MobileScreensAndStylingExerciseThree from "./src/screens/MobileScreensAndStyling/ExerciseThree";
import MobileScreensAndStylingExerciseTwo from "./src/screens/MobileScreensAndStyling/ExerciseTwo";
import Overview from "./src/screens/Overview";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen
          name="Mobile Screens And Styling Exercise One"
          component={MobileScreensAndStylingExerciseOne}
          options={{ title: "Creating Screens" }}
        />
        <Stack.Screen
          name="Mobile Screens And Styling Exercise Two"
          component={MobileScreensAndStylingExerciseTwo}
          options={{ title: "Styling Mobile Content" }}
        />
        <Stack.Screen
          name="Mobile Screens And Styling Exercise Three"
          component={MobileScreensAndStylingExerciseThree}
          options={{ title: "Putting it All Together" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
