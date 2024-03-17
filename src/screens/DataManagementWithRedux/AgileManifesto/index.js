import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { useUpdateUserInput } from "./hooks";

const AgileManifesto = () => {
  const { userInputs, setUserInput } = useUpdateUserInput();
  const [storyReady, setStoryReady] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}></View>

          {Object.entries(userInputs).map(([key]) => (
            <TextInput
              key={key}
              placeholder={userInputs[key].type}
              value={userInputs[key].value}
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 4,
                padding: 15,
                margin: 4,
              }}
              // We are able to call this function with the `key` alone because, the way the function is
              // defined, it will also pull in the `value` initially passed when `onChangeText` is called.
              onChangeText={setUserInput(key)}
              autoCapitalize="none"
            />
          ))}

          <TouchableOpacity
            onPress={() => setStoryReady(true)}
            style={{
              alignItems: "center",
              backgroundColor: "#bad1de",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
          >
            <Text>Create Story</Text>
          </TouchableOpacity>

          {storyReady && (
            <View style={{ margin: 16 }}>
              <Text>
                Principles behind the{" "}
                {userInputs["noun1"].value.charAt(0).toUpperCase() +
                  userInputs["noun1"].value.slice(1)}{" "}
                Manifesto
                {"\n"}
              </Text>

              <Text>
                We follow these {userInputs["noun2"].value}:{"\n"}
              </Text>

              <Text>
                Our {userInputs["adjective1"].value} priority is to satisfy the
                customer through early and continuous delivery of{" "}
                {userInputs["adjective2"].value} software.{"\n"}
              </Text>

              <Text>
                Welcome {userInputs["adjective3"].value} requirements, even late
                in development. Agile processes harness change for the
                customer's {userInputs["adjective4"].value}{" "}
                {userInputs["noun3"].value}.{"\n"}
              </Text>

              <Text>
                {userInputs["verb1"].value.charAt(0).toUpperCase() +
                  userInputs["verb1"].value.slice(1)}{" "}
                working software {userInputs["adverb1"].value}, from a couple of
                weeks to a couple of months, with a preference to the{" "}
                {userInputs["adjective5"].value} timescale.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgileManifesto;
