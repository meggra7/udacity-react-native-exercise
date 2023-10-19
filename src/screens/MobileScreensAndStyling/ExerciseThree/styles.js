import { StyleSheet } from "react-native";

export const AppColors = {
  textPrimary: "#414141",
  accent: "#A6CAE3",
  accentDark: "#0E538D",
  warn: "#D37F15",
  alert: "#9B4215",
};

const defaultMargins = {
  marginStart: 16,
  marginEnd: 16,
};

export const styles = StyleSheet.create({
  body: {
    ...defaultMargins,
    marginTop: 8,
    color: AppColors.textPrimary,
  },
  title: {
    ...defaultMargins,
    marginTop: 36,
    marginBottom: 8,
    color: AppColors.textPrimary,
    fontSize: 40,
    fontWeight: "bold",
  },
  header: {
    ...defaultMargins,
    marginTop: 12,
    marginBottom: 8,
    color: AppColors.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
  },
  imageCaption: {
    margin: 4,
    alignSelf: "flex-end",
    fontSize: 10,
    fontStyle: "italic",
  },
  colorSwatch: {
    flex: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
