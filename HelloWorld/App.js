import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry,  TouchableOpacity ,Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <View style  = {styles.container1}>         <img src={require('./Picutures/logonew.png')} /> 
      <View style  = {styles.container2}> <img src={require('./Picutures/leaf.png')} />
      <View style = {styles.button1}>
        <button>
         Log in with Email
        </button>
      </View>
      
</View>
    </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EA4B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{  
    flex:3,
    top:50,

  },
  container2:{
  flex:1,
  top:125,
},
button1:{
  alignItems: 'center',
  top:-250,

}
});
