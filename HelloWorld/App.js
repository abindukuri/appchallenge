import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Button,TouchableOpacity, Text, View, Font} from 'react-native';
import Login from './Login';
import Menu from './Menu';
import Stats from './Stats';
import Words from './Words';
import Phrases from './Phrases';




export default function App() {
  const [currentView,setView]  = useState('Welcome');
  if (currentView == "Welcome"){
    return (
      <View style={styles.container}> 
        <StatusBar style="auto" />
        <View style  = {styles.container1}> <img src={require('./Pictures/logonew.png')} /> 
        <View style  = {styles.container2}> <img src={require('./Pictures/leaf.png')} />
        
        <View style = {styles.button}>
          <Button
          onPress={()=> {setView('Login')}}
          title = "Log In With Email"
          color = "7C9A92"
            />  
          
        </View>
        
  </View>
      </View>
      </View>
      
  
    );
  }
  if (currentView == 'Login'){
    return(<Login changeView = {setView}>
    </Login>)
  }

  if (currentView == 'Menu'){
    return(<Menu changeView = {setView}>
    </Menu>)
  }

  if (currentView == 'Stats'){
    return(<Stats changeView = {setView}>
    </Stats>)
  }

  if (currentView == 'Words'){
    return(<Words changeView = {setView}>
    </Words>)
  }
  if (currentView == 'Phrases'){
    return(<Phrases changeView = {setView}>
    </Phrases>)
  }

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
button:{
  top:-250,
  left: 127.5,
  width: 175,
  borderRadius:5,
  paddingVertical: 5,
  paddingHorizontal : 10,
  backgroundColor : '#7C9A92',


},

});
