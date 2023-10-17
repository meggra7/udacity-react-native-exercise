import { Pressable, View } from "react-native";
import { SquareColor, exerciseTwoStyles } from "../styles/exerciseTwo";
import { useState } from "react";

export default function ExerciseTwo() {
  const [selectedColor, setSelectedColor] = useState(null);
  const styles = exerciseTwoStyles(selectedColor);

  const toggleSelectedColor = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <Pressable
        style={styles.yellowSquare}
        onPress={() => toggleSelectedColor(SquareColor.Yellow)}
      />
      <Pressable
        style={{
          ...styles.blueSquare,
          alignSelf: "center",
        }}
        onPress={() => toggleSelectedColor(SquareColor.Blue)}
      />
      <Pressable
        style={{
          ...styles.greenSquare,
          alignSelf: "flex-end",
        }}
        onPress={() => toggleSelectedColor(SquareColor.Green)}
      />
    </View>
  );
}
