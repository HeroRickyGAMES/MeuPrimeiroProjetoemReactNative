import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.area}>
    <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou o Dougras</Text>
    <Text style={styles.alinhaTexto}>Você não é o Dougras</Text>
    <Text>Eu estou aqui</Text>
    <Text style={styles.textoPrincipal}>E você tá aí</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area:{
    marginTop: 40
  },
  textoPrincipal:{
    fontSize: 30,
    color:'red'
  },
  alinhaTexto:{
    textAlign: 'center'
  }
});

export default App;