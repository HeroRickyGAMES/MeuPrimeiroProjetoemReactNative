
//Programado por HeroRickyGames no curso de React Native do professor Matheus Fraga

import React, { Component } from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Slider from "@react-native-community/slider";

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    valor: 0
  };
}

  render(){
    return(
      <View style={styles.container}>

      <Slider
      minimumValue={0}
      maximumValue={100}
      onValueChange={ (valorSelecionado) => this.setState({valorSelecionado})}
      value={this.state.valor}
      minimumTrackTintColor="#00ff00"
      maximumTrackTintColor="#FF0000"
      />

      <Text style={{textAlign: 'center', fontSize: 30}}>
        {this.state.valor.toFixed(0)}
      </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 15
    },
});

export default App

