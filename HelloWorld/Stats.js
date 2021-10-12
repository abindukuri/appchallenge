import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, Pressable, Image} from 'react-native';
import React, { useState } from 'react';




export default function Stats(props) {
  return (
      <View style={styles.container}>

      <View style={styles.statsimg}> <img src={require('./Pictures/statsimg.png')} /></View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EA4B2',
    alignItems: 'center',
    justifyContent:'flex-start',
},
    statsimg: {
      top : 175

    }

})
