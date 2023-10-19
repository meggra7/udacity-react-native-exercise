import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  lessonHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  exerciseButton: {
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "purple",
  },
  exerciseButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
