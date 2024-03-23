import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import New from "../../../New";

// top level display component only - declares a view that will be part of navigation
const NewScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <New />
    </ScrollView>
  </SafeAreaView>
);

export default NewScreen;
