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
        name="Mobile Screens And Styling Exercise One Push"
        component={MobileScreensAndStylingExerciseOne}
        options={{ title: "Creating Screens", animationTypeForReplace: "push" }}
      />
      <Stack.Screen
        name="Mobile Screens And Styling Exercise One Pop"
        component={MobileScreensAndStylingExerciseOne}
        options={{ title: "Creating Screens", animationTypeForReplace: "pop" }}
      />
      <Stack.Screen
        name="Mobile Screens And Styling Exercise Two Push"
        component={MobileScreensAndStylingExerciseTwo}
        options={{
          title: "Styling Mobile Content",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="Mobile Screens And Styling Exercise Two Pop"
        component={MobileScreensAndStylingExerciseTwo}
        options={{
          title: "Styling Mobile Content",
          animationTypeForReplace: "pop",
        }}
      />
      <Stack.Screen
        name="Mobile Screens And Styling Exercise Three Push"
        component={MobileScreensAndStylingExerciseThree}
        options={{
          title: "Putting it All Together",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="Mobile Screens And Styling Exercise Three Pop"
        component={MobileScreensAndStylingExerciseThree}
        options={{
          title: "Putting it All Together",
          animationTypeForReplace: "pop",
        }}
      />
    </Stack.Navigator>
  );
}
