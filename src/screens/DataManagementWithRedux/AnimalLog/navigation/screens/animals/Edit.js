import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Edit from "../../../Edit";

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Edit />
    </ScrollView>
  </SafeAreaView>
);

export default NewScreen;
