import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';


class Pessoas extends Component {
    render(){
      return(
        <View style={styles.areaPessoas}>
          <Text style={styles.textoPessoas}> Nome: {this.props.data.nome} </Text>
          <Text style={styles.textoPessoas}> Idade: {this.props.data.idade} </Text>
          <Text style={styles.textoPessoas}> Email: {this.props.data.email} </Text>
        </View>
      );
    }
  } 


  const styles = StyleSheet.create({
    
    areaPessoas:{
        backgroundColor: 'blue',
        height: 300,
        marginBottom: 15
      },
      textoPessoas:{
        color: '#fff',
        fontSize: 20
      }
  })
  export default Pessoas;