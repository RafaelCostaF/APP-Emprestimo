import { Text, View, StyleSheet} from 'react-native';

const Header = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Encontre possíveis empréstimos para você</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2196f3',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:"5px",
      marginBottom:20,
      marginTop:20,
      maxHeight:100,
    },
    title: {
        color:"#fff",
        padding:20,
        fontWeight:'bold',
        fontSize: 20,
    },
  });

export default Header;