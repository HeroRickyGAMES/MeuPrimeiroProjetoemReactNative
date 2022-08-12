
//Programado por HeroRickyGames no curso de React Native do professor Matheus Fraga

import React, { Component } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    input: '',
    nome: ''
  };

  this.gravanome = this.gravanome.bind(this);

}
gravanome(){
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
}

  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value)=> {
      this.setState ({nome: value})
    })
  }

  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;
    if(prevState !== nome){
     await AsyncStorage.setItem('nome', nome);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
          style={styles.input}
          value={this.state.input}
          onChangeText={(text) => this.setState({input: text})}
          underlineColorAndroid= "transparent"
          />

          <TouchableOpacity onPress={this.gravanome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 20,
      alignItems: 'center'
    },
    viewInput:{
      flexDirection: "row",
      alignItems: "center"
    },
    input:{
        width: 350,
      height: 40,
      borderColor: '#fff',
      borderWidth: 1,
      padding: 10 
    },
    botao:{
      backgroundColor: '#fff',
      color: '#000',
      height: 40,
      padding: 10,
      marginLeft: 4,
    },
    nome:{
      fontSize: 30,
      textAlign: "center",
      marginTop: 15
    }
});

export default App

