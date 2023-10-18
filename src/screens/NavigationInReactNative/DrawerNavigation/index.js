import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Overview from "../../Overview";
import MobileScreensAndStylingExerciseOne from "../../MobileScreensAndStyling/ExerciseOne";
import MobileScreensAndStylingExerciseThree from "../../MobileScreensAndStyling/ExerciseThree";
import MobileScreensAndStylingExerciseTwo from "../../MobileScreensAndStyling/ExerciseTwo";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Overview"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "ghostwhite",
          },
        }}
      >
        <Drawer.Screen name="Overview" component={Overview} />
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
    </NavigationContainer>
  );
}
