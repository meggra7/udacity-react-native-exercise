import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Button, Pressable, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import welcomeStyles from './styles';

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles())
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>This is the welcome screen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Add Animal')}><Text>Add Animal</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Animals')}><Text>Animals</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}