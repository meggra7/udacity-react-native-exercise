import { Pressable, View } from "react-native";
import { SquareColor, styles } from "./styles";
import { useState } from "react";

export default function MobileScreensAndStylingExerciseTwo() {
  const [selectedColor, setSelectedColor] = useState(null);
  const selectedStyles = styles(selectedColor);

  const toggleSelectedColor = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
      }}
    >
      <Pressable
        style={selectedStyles.yellowSquare}
        onPress={() => toggleSelectedColor(SquareColor.Yellow)}
      />
      <Pressable
        style={{
          ...selectedStyles.blueSquare,
          alignSelf: "center",
        }}
        onPress={() => toggleSelectedColor(SquareColor.Blue)}
      />
      <Pressable
        style={{
          ...selectedStyles.greenSquare,
          alignSelf: "flex-end",
        }}
        onPress={() => toggleSelectedColor(SquareColor.Green)}
      />
    </View>
  );
}
