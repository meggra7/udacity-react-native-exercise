import { Pressable, Text, View } from "react-native";
import { navigationStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = ({ previousScreen, nextScreen }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 8,
        gap: 8,
        backgroundColor: "purple",
      }}
    >
      <Pressable
        style={navigationStyles.navigationButton}
        onPress={() => {
          navigation.replace(previousScreen);
        }}
      >
        <Text style={navigationStyles.navigationButtonText}>Previous</Text>
      </Pressable>
      <Pressable
        style={navigationStyles.navigationButton}
        onPress={() => {
          navigation.replace(nextScreen);
        }}
      >
        <Text style={navigationStyles.navigationButtonText}>Next</Text>
      </Pressable>
    </View>
  );
};

export default NavigationBar;
