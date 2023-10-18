import { StyleSheet } from "react-native";

export const SquareColor = {
  Yellow: "yellow",
  Blue: "blue",
  Green: "green",
};

const selectedBorderWidth = 8;

export const exerciseTwoStyles = (selectedColor) =>
  StyleSheet.create({
    yellowSquare: {
      width: 200,
      height: 200,
      backgroundColor: "gold",
      borderColor: "goldenrod",
      borderWidth: selectedColor === SquareColor.Yellow ? selectedBorderWidth : 0,
    },
    blueSquare: {
      width: 100,
      height: 100,
      backgroundColor: "lightsteelblue",
      borderColor: "steelblue",
      borderWidth: selectedColor === SquareColor.Blue ? selectedBorderWidth : 0,
    },
    greenSquare: {
      width: 150,
      height: 150,
      backgroundColor: "mediumseagreen",
      borderColor: "seagreen",
      borderWidth: selectedColor === SquareColor.Green ? selectedBorderWidth : 0,
    },
  });
