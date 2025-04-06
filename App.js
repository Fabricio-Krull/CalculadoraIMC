import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Touchable } from "react-native";
import Classification from './src/components/Classification.js';
import Calculating from './src/components/Calculating.js';
import IdealWeight from './src/components/IdealWeight.js';

export default function App() {
  return ( // Todos os arquivos chamandos retornam JSX, como este aqui
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AA399',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  header: {

    backgroundColor: '#FF9A33',
    height: "20%",
    width: "100%",
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },

  bottomDiv: {

    backgroundColor: '#FBB03B',
    alignItems: 'center',
    height: "80%",
    width: "100vw",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },


  Text: {

    color: "#03002E",
    fontSize: 30,
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
