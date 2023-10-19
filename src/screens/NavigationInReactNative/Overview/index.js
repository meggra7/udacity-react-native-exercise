import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Overview() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.lessonHeader}>Mobile Screens and Styling</Text>
      <Pressable
        style={styles.exerciseButton}
        onPress={() => navigate("Mobile Screens And Styling Exercise One Push")}
      >
        <Text style={styles.exerciseButtonText}>Creating Screens</Text>
      </Pressable>
      <Pressable
        style={styles.exerciseButton}
        onPress={() => navigate("Mobile Screens And Styling Exercise Two Push")}
      >
        <Text style={styles.exerciseButtonText}>Styling Mobile Content</Text>
      </Pressable>
      <Pressable
        style={styles.exerciseButton}
        onPress={() =>
          navigate("Mobile Screens And Styling Exercise Three Push")
        }
      >
        <Text style={styles.exerciseButtonText}>Putting It All Together</Text>
      </Pressable>
    </View>
  );
}
