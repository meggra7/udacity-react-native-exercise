import { Text, View } from "react-native";

export default function ExerciseTwo() {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View
        style={{
          backgroundColor: "gold",
          width: 200,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "steelblue",
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          backgroundColor: "mediumseagreen",
          width: 150,
          height: 150,
          alignSelf: "flex-end",
        }}
      />
    </View>
  );
}
