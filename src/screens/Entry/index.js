import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Entry() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.exerciseButton} onPress={() => navigate('Lessons One and Two')}>
        <Text style={styles.exerciseButtonText}>
          Lessons One and Two:{"\n"}Mobile Screens and Styling and Navigation in
          React Native
        </Text>
      </Pressable>
      <Pressable style={styles.exerciseButton} onPress={() => navigate('Lesson Three')}>
        <Text style={styles.exerciseButtonText}>
          Lesson Three:{"\n"}Data Management with Redux
        </Text>
      </Pressable>
    </View>
  );
}
