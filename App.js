import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Classification from './src/components/Classification.js';
import Calculating from './src/components/Calculating.js';

export default function App() {
  return ( // Todos os arquivos chamados retornam JSX, como este aqui
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.Text}>
              Você está saudável? Calcule o seu IMC e descubra!
          </Text>
      </View>

      <View style={styles.bottomDiv}>

        <View style={styles.inputs}>

          <Calculating/>
          
        </View>

          <Classification/>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ // Não vou comentar a estilização
  container: {
    flex: 1,
    backgroundColor: '#A5ABA0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  header: {

    backgroundColor: '#A5ABA0',
    height: "17%",
    width: "100%",
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },

  bottomDiv: {

    backgroundColor: '#DBDDD0',
    alignItems: 'center',
    height: "80%",
    width: "100vw",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },


  Text: {

    color: "#03002E",
    fontSize: 25,
  },

  weight: {
    width: '30%',
    height: '20%',
  },

  inputs: {

    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '20%',
    justifyContent: 'center',

  },

  calc: {

    display: 'flex',
    margin: '2%',

  }
});
