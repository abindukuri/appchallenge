import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, Pressable, Image} from 'react-native';
import React, { Component, useState } from 'react';
import AudioRecord from 'react-native-live-audio-stream';


export default class Words extends Component {
  constructor(props){
    super(props);
    this.state = {
        recording:false,
        audiofile:null,
    }
    this.record = this.record.bind(this);
  }
  async componentDidMount(){
    const options = {
        sampleRate: 32000,  // default is 44100 but 32000 is adequate for accurate voice recognition
        channels: 1,        // 1 or 2, default 1
        bitsPerSample: 16,  // 8 or 16, default 16
        bufferSize: 4096    // default is 2048
    };
    AudioRecord.init(options);
  }
  
  async record(){
    if (this.state.recording == false){
        AudioRecord.start();
        this.setState({recording:true})
    }
    else{
        this.setState({recording:false})
        let audiofile = await AudioRecord.stop();
        console.log(audiofile); 
    }
}
    render() {
      return(
    <View style={styles.container}>
    <Pressable style={styles.logo} onPress={() => { props.changeView('Menu'); } }>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>
    </Pressable>
    <View style={styles.Wordsimage}><img src={require('./Pictures/Wordspic.png')} /></View>
    <Pressable style={styles.logo} onPress={this.record}>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>
    </Pressable>
    
    </View>

  );}
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9EA4B2',
        alignItems: 'center',
        justifyContent:'flex-start',
    },


    logo: {
        top:'6%',
    },

    image: {
        backgroundColor:'#9EA4B2',
        width: 69,
        length: 59, 

    },

    Wordsimage: {
        width:'100%',
        height:'50%',
        top: '7%',
    }

})
