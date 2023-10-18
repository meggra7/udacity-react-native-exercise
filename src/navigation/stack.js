import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Overview from "../screens/NavigationInReactNative/Overview";
import MobileScreensAndStylingExerciseOne from "../screens/MobileScreensAndStyling/ExerciseOne";
import MobileScreensAndStylingExerciseThree from "../screens/MobileScreensAndStyling/ExerciseThree";
import MobileScreensAndStylingExerciseTwo from "../screens/MobileScreensAndStyling/ExerciseTwo";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
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
  );
}
