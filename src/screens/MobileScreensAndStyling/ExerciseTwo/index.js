import { Pressable, View } from "react-native";
import { SquareColor, styles } from "./styles";
import { useState } from "react";
import NavigationBar from "../../NavigationInReactNative/PuttingItAllTogether/NavigationBar";
import { useNavigationState } from "@react-navigation/native";

export default function MobileScreensAndStylingExerciseTwo() {
  const navigationType = useNavigationState((state) => state.type);
  const [selectedColor, setSelectedColor] = useState(null);
  const selectedStyles = styles(selectedColor);

  const toggleSelectedColor = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <View style={{ flex: 1 }}>
      {navigationType === "stack" && (
        <NavigationBar
          previousScreen="Mobile Screens And Styling Exercise One Pop"
          nextScreen="Mobile Screens And Styling Exercise Three Push"
        />
      )}
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
    </View>
  );
}
