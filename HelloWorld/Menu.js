import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput, Pressable, Image} from 'react-native';
import React, { useState } from 'react';




export default function Menu(props) {
  return (
    <View style={styles.container}>
    <View style={styles.image}><img src={require('./Pictures/logosmall.png')} /></View>
    <Pressable style={styles.buttonprofile} onPress={() => { props.changeView('Stats'); } }>
       <View>
            <Image style={styles.img} source={require('./Pictures/Profilepic.jpg')} />
        </View>
    </Pressable>
    <View style={styles.contentcontainer}>
    <View style={styles.Welcomecontainer}><Text style={styles.Welcometext}>Welcome Back, John</Text></View> 
    <View style = {styles.subtitlecontainer}> <Text style = {styles.subtitle}> Speech Practice for Today! </Text>  </View>
    {/*WORDS*/}
    <View style={styles.buttonscontainer}>
    <View style={styles.Words}>
    <Pressable style={styles.Wordcontainter} onPress={() => { props.changeView('Words'); } }>
       <View style={styles.Wordimg}> <img src={require('./Pictures/Wordsicon.png')} /></View>
    </Pressable>
    <Text style={styles.wordtext}>Words</Text>
    </View>
    {/*PHRASES*/}

    <View style={styles.phrases}>
    <Pressable style={styles.phrasescontainer} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.phrasesimg}> <img src={require('./Pictures/phrasesicon.png')} /></View>
    </Pressable>
    <Text style={styles.phrasestext}>Phrases</Text>
    </View>
    {/*Sentences*/}
    <View style={styles.sentences}>
    <Pressable style={styles.sentencescontainer} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.sentencesimg}> <img src={require('./Pictures/sentencesicon.png')} /></View>
    </Pressable>
    <Text style={styles.sentencestext}>Sentences</Text>
    </View>
    {/*Questions*/}
    <View style={styles.questions}>
    <Pressable style={styles.questionscontainer} onPress={() => { props.changeView('Welcome'); } }>
       <View style={styles.questionsimg}> <img src={require('./Pictures/questionsicon.png')} /></View>
    </Pressable>
    <Text style={styles.questionstext}>Questions</Text>
    </View>
   
    </View>
    
    </View>
    <View style={styles.menuimg}> <img src={require('./Pictures/Menupic.png')} /></View>
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

    image: {
        backgroundColor:'#9EA4B2',
        width: 69,
        length: 59,
        top: '6%',
        position:'absolute',

    },

    img:{
        height:35,
        width:35,
        borderRadius:20,
    },
    
    menuimg: {
        height:'60%',
        width:'100%',
        top:'40%',
    },

    buttonprofile: {
        width:35,
        height: 35,
        left:'80%',
        position:'absolute',
        top:'8%',
    },

    profileimg: {
        width:35,
        height:35,

    },


    contentcontainer:{
        width:'85%',
        height:'20%',
        position:'absolute',
        top:'18%',
        
    },

    Welcomecontainer: {
        width:'90%',
        alignItems:'left',


      },

  
    Welcometext: {
        fontSize: 30,
        color:'#fff',
        fontFamily: 'Georgia',
        left: 25,

  
      },
      phrasestext: {
        fontSize: 30,
        color:'#fff',
        fontFamily: 'Georgia',
        left  : 25,

  
      },

      buttonscontainer: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'5%',

      },

      Words: {
          width:62,
          height:84,
          color:'#000',
        //   left:-130,
        //   top:-110,

      },
      phrases: {
        width:62,
        height:84,
        color:'#000',
        // top:-194,
        // left:-50,

    },
    sentences: {
        width:62,
        height:84,
        color:'#000',
        // top: -278,
        // left:30,
    },

    questions: {
        width:62,
        height:84,
        color:'#000',
        // top: -362,
        // left:110,
    },

      Wordcontainter: {
          width:62,
          height:64,
          borderRadius:10,
          backgroundColor:'#fff',
          alignItems:'center',

      },
      phrasescontainer: {
        width:62,
        height:64,
        borderRadius:10,
        backgroundColor:'#fff',
        alignItems:'center',

    },
    sentencescontainer: {
        width:62,
        height:64,
        borderRadius:10,
        backgroundColor:'#fff',
        alignItems:'center',

    },

    questionscontainer: {
        width:62,
        height:64,
        borderRadius:10,
        backgroundColor:'#fff',
        alignItems:'center',

    },

      Wordimg: {
          width:35,
          height:35,
          top:15,
      },

      phrasesimg: {
        width:35,
        height:35,
        top:15,
    },
    sentencesimg: {
        width:35,
        height:35,
        top:15,
    },
    questionsimg: {
        width:35,
        height:35,
        top:15,
    },

      wordtext: {
        fontSize: 12,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:15,
    },
    phrasestext: {
        fontSize: 12,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:15,
    },
    sentencestext: {
        fontSize: 12,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:15,
    },
    questionstext: {
        fontSize: 12,
        color:'#fff',
        fontFamily: 'Georgia',
        textAlign:'center',
        paddingTopWidth:15,
    },
    subtitle: {
        fontSize: 15, 
        color:'#fff',
        fontFamily: 'Georgia',


    },
    subtitlecontainer: {
        width:'90%',
        alignItems:'left',
    },


})
