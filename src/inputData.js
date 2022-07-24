import React from 'react';
import { Text,SafeAreaView, TextInput, StyleSheet, Button} from 'react-native';

const InputData = ({getInputs}) => {
    const [name, onChangeName] = React.useState(null);
    const [cpf, onChangeCpf] = React.useState(null);
    const [age, onChangeAge] = React.useState(null);
    const [uf, onChangeUf] = React.useState(null);
    const [rendaMensal, onChangeRendaMensal] = React.useState(null);

    const childToParent = () => { 
        getInputs({
            "cliente":{
            "name":name,
            "cpf":cpf,
            "age":parseInt(age),
            "uf":uf,
            "renda_mensal":parseInt(rendaMensal)
            }
        });
    }

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.upperText}>Nome : </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Example name"
            />
            <Text style={styles.upperText}>CPF : </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeCpf}
                value={cpf}
                placeholder="123.456.789-10"
            />
            <Text style={styles.upperText}>Idade : </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeAge}
                value={age}
                placeholder="00"
                keyboardType="numeric"
            />
            <Text style={styles.upperText}>UF : </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUf}
                value={uf}
                placeholder="UF"
            />
            <Text style={styles.upperText}>Renda Mensal : </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeRendaMensal}
                value={rendaMensal}
                placeholder="3000"
                keyboardType="numeric"
            />

            <Button primary onPress={childToParent} title="Ver emprestimos"/>
        </SafeAreaView>

        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eeeeee',
        alignItems: 'left',
        justifyContent: 'center',
        borderRadius:'5px',
        paddingTop: '15px',
  },
    input: 
    {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:'5px',
    },
    upperText:{
        marginLeft: 12,
    },
});

export default InputData;