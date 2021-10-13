import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("weqwewqe")

  return (
    <View>
      <TextInput style={styles.input} onChangeText = {onChangeText} value={text} />
      <Button
        title="Clique Aqui"
        onPress={() => Alert.alert('Olá ' + text + '!!!')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
