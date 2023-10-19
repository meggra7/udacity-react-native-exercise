import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./stack";
import DrawerNavigation from "./drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;

          switch (route.name) {
            case "Stack Navigation":
              iconName = "logo-stackoverflow";
              break;
            case "Drawer Navigation":
              iconName = "file-tray-full-sharp";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "purple",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Stack Navigation" component={StackNavigation} />
      <Tab.Screen name="Drawer Navigation" component={DrawerNavigation} />
    </Tab.Navigator>
  );
}
