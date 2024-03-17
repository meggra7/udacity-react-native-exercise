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

const AgileManifesto = () => {
  const [noun1, setNoun1] = useState("");
  const [noun2, setNoun2] = useState("");
  const [adjective1, setAdjective1] = useState("");
  const [adjective2, setAdjective2] = useState("");
  const [adjective3, setAdjective3] = useState("");
  const [adjective4, setAdjective4] = useState("");
  const [noun3, setNoun3] = useState("");
  const [verb1, setVerb1] = useState("");
  const [adverb1, setAdverb1] = useState("");
  const [adjective5, setAdjective5] = useState("");
  const [storyReady, setStoryReady] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}></View>

          <TextInput
            key={"noun1"}
            placeholder="Noun"
            value={noun1}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setNoun1(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"noun2"}
            placeholder="Noun (plural)"
            value={noun2}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setNoun2(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"adjective1"}
            placeholder="Adjective"
            value={adjective1}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setAdjective1(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"adjective2"}
            placeholder="Adjective"
            value={adjective2}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setAdjective2(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"adjective3"}
            placeholder="Adjective"
            value={adjective3}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setAdjective3(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"adjective4"}
            placeholder="Adjective"
            value={adjective4}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setAdjective4(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"noun3"}
            placeholder="Noun"
            value={noun3}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setNoun3(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"verb1"}
            placeholder="Verb"
            value={verb1}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setVerb1(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"adverb1"}
            placeholder="Adverb"
            value={adverb1}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setAdverb1(text)}
            autoCapitalize="none"
          />

          <TextInput
            key={"adjective5"}
            placeholder="Adjective"
            value={adjective5}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 4,
              padding: 15,
              margin: 4,
            }}
            onChangeText={(text) => setAdjective5(text)}
            autoCapitalize="none"
          />

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
                {noun1.charAt(0).toUpperCase() + noun1.slice(1)} Manifesto
                {"\n"}
              </Text>

              <Text>
                We follow these {noun2}:{"\n"}
              </Text>

              <Text>
                Our {adjective1} priority is to satisfy the customer through
                early and continuous delivery of {adjective2} software.{"\n"}
              </Text>

              <Text>
                Welcome {adjective3} requirements, even late in development.
                Agile processes harness change for the customer's {adjective4}{" "}
                {noun3}.{"\n"}
              </Text>

              <Text>
                {verb1.charAt(0).toUpperCase() + verb1.slice(1)} working
                software {adverb1}, from a couple of weeks to a couple of
                months, with a preference to the {adjective5} timescale.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgileManifesto;
