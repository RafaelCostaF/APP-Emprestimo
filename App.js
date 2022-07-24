import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable,Text,StyleSheet, Modal, View } from 'react-native';
import { FlatList } from 'react-native-web';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import InputData from './src/inputData';
import Header from './src/Header';


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      cliente:{},
      produtosEmprestimo:[],
      modalVisible:false,
    }

    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
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
    })
    .catch((error) => {
      console.log(error);
    });
  }



  render(){
    return (
      <View style={styles.container}>
        <Header/>
        <InputData getInputs={this.getDataFromApi} modalFunction={this.setModalVisible}/>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Tipo Emprestimo</DataTable.Title>
                  <DataTable.Title>Taxa de Juros</DataTable.Title>
                </DataTable.Header>
                <FlatList
                  data={this.state.produtosEmprestimo}
                  renderItem={({item}) => 
                  <DataTable.Row>
                    <DataTable.Cell>{item.tipo_emprestimo}</DataTable.Cell>
                    <DataTable.Cell>{item.taxa}%</DataTable.Cell>
                  </DataTable.Row>
                  }
                />
              </DataTable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 22
  }, 
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

