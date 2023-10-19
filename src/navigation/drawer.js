import { createDrawerNavigator } from "@react-navigation/drawer";
import Overview from "../screens/NavigationInReactNative/Overview";
import MobileScreensAndStylingExerciseOne from "../screens/MobileScreensAndStyling/ExerciseOne";
import MobileScreensAndStylingExerciseThree from "../screens/MobileScreensAndStyling/ExerciseThree";
import MobileScreensAndStylingExerciseTwo from "../screens/MobileScreensAndStyling/ExerciseTwo";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "ghostwhite",
        },
      }}
    >
      <Drawer.Screen
        name="Mobile Screens And Styling Exercise One"
        component={MobileScreensAndStylingExerciseOne}
        options={{ title: "Creating Screens" }}
      />
      <Drawer.Screen
        name="Mobile Screens And Styling Exercise Two"
        component={MobileScreensAndStylingExerciseTwo}
        options={{ title: "Styling Mobile Content" }}
      />
      <Drawer.Screen
        name="Mobile Screens And Styling Exercise Three"
        component={MobileScreensAndStylingExerciseThree}
        options={{ title: "Putting it All Together" }}
      />
    </Drawer.Navigator>
  );
}
