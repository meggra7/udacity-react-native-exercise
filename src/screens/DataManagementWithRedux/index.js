import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function DataManagementWithRedux() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.exerciseButton}
        onPress={() => navigate("Agile Manifesto")}
      >
        <Text style={styles.exerciseButtonText}>Agile Manifesto</Text>
      </Pressable>
      <Pressable
        style={styles.exerciseButton}
        onPress={() => navigate("Animal Log")}
      >
        <Text style={styles.exerciseButtonText}>Animal Log</Text>
      </Pressable>
    </View>
  );
}
