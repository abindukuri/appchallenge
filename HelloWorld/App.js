import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './Cat';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Cat></Cat>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2930',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
