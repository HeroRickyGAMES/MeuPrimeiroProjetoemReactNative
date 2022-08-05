
//Programado por HeroRickyGames no curso de React Native do professor Matheus Fraga

import React, { Component } from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: '1', nome: 'Ricky', idade: '20', email: 'ricojn9@gmail.com' },
        {id: '2',nome: 'Jailson', idade: '99', email: 'jailsonmendesdobrasil@gmail.com' },
        {id: '3',nome: 'Maria', idade: '55', email: 'maria@gmail.com' },
        {id: '4',nome: 'Paulo Guina', idade: '80', email: 'pauloguina@gmail.com' },
        {id: '5',nome: 'José', idade: '20', email: 'jose@gmail.com' },
      ],
      
    };
  }

  render(){
    return(
      <View style={styles.container}>

        <FlatList
        data={this.state.feed}
        keyExtractor={(item)=> item.id }
        renderItem={ ({item})=> <Pessoa  data={item}/> }
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    areaPessoa:{
      backgroundColor: 'blue',
      height: 300,
      marginBottom: 15
    },
    textoPessoa:{
      color: '#fff',
      fontSize: 20
    }
});

export default App

class Pessoa extends Component {
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}> Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}> Email: {this.props.data.email} </Text>
      </View>
    );
  }
}