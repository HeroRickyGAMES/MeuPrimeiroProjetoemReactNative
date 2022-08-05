
//Programado por HeroRickyGames no curso de React Native do professor Matheus Fraga

import React, { Component } from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';

class App extends Component{

  render(){
    return(
      <View style={styles.container}>
          <ScrollView>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    box1:{
      backgroundColor: 'red',
      height: 300,
    },
    box2:{
      backgroundColor: 'green',
      height: 300,
    },
    box3:{
      backgroundColor: 'yellow',
      height: 300,
    },
    box4:{
      backgroundColor: 'blue',
      height: 300,
    }
});

export default App