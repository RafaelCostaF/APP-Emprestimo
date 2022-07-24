import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputData from './src/inputData';
import Header from './src/Header';
import { FlatList } from 'react-native-web';
import axios from 'axios';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      cliente:{},
      produtosEmprestimo:[]
    }

    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  getDataFromApi = (clientData) => {
    var data = JSON.stringify(clientData);

    var config = {
      method: 'post',
      url: 'http://localhost:3000/api',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then((response) => {
      this.setState({
        cliente:response.data.cliente,
        produtosEmprestimo:response.data.produtos_emprestimo
      })
      console.log(JSON.stringify(response.data));
      
    })
    .catch((error) => {
      console.log(error);
    });
  }



  render(){
    return (
      <View style={styles.container}>
        <Header/>
        <InputData getInputs={this.getDataFromApi}/>
        <FlatList
          data={this.state.produtosEmprestimo}
          renderItem={({item}) => <Text>{item.tipo_emprestimo} : {item.taxa}</Text>}
        />

        <StatusBar style="auto" />
      </View>
    )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

