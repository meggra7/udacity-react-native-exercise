import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Overview from "../../Overview";
import MobileScreensAndStylingExerciseOne from "../../MobileScreensAndStyling/ExerciseOne";
import MobileScreensAndStylingExerciseThree from "../../MobileScreensAndStyling/ExerciseThree";
import MobileScreensAndStylingExerciseTwo from "../../MobileScreensAndStyling/ExerciseTwo";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
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
