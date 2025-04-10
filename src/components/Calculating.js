import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Classification from './Classification';
import IdealWeight from './IdealWeight';

// Esse componente é equivalente ao componente results.
// Nele, são calculados os valores de imc, peso, altura, e definido o gênero do usuário, que pode ser alterado
// a qualquer momento no aplicativo, visando calcular com facilidade para cada um dos dois gêneros.

 // função useState usada para alterar o estado de algum valor
 // com base em um evento (nesse caso na troca do valor de um input)
const Calculating = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setIMC] = useState(null);
    

    const CalcIMC = () => {
        if (weight && height && (weight != 0 && height != 0)) { // caso o usuário insira qualquer valor numérico diferente de 0
            const calculatedIMC = (parseFloat(weight) / ((parseFloat(height) / 100) * (parseFloat(height) / 100))).toFixed(2);
            setIMC(calculatedIMC);  // Atualiza o estado do IMC
        }
        else{
            setIMC(0);
            // caso o valor de ambos peso e altura sejam 0 ou indefinido (null ou undefined), 
            // o aplicativo define o IMC para 0, apagando a seção de classificações
        }
      };


    
    const styles = StyleSheet.create({ // Não vou comentar a estilização

        input: {

            width: '86%',
            borderTopLeftRadius: 20,
            height: '100%',
            backgroundColor: '#666666',
            color: 'white',
            textAlign: 'center',
            
        },

        input2: {

            width: '86%',
            borderBottomLeftRadius: 20,
            height: '100%',
            backgroundColor: '#666666',
            color: 'white',
            textAlign: 'center',
            
        },

        main: {
            
            width: '100%',
            
        },

        inputs2: {

            height: '40%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',

        },

        result: {

            height: '200%',
            width: '100%',
            padding: '1%',
            backgroundColor: '#DBDDD0',
            
        },
        
        buttons: {

            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            height: '45%',

        },

        resultText:{
            
            fontSize: 30,

        },

        calc: {

            display: 'flex',
            backgroundColor: "#C6C5BF",
            height: "100%",
            width: "50%",
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5%',
        },


    });

    return(
        
        <View style={styles.main}>
            <View style={styles.inputs2}>
                <Text style={{fontSize: 17,}}>Peso: </Text>
                <TextInput
                style={styles.input}
                placeholder="Peso em quilos"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                />
            </View>
            
            <View style={styles.inputs2}>
                <Text>Altura: </Text>
                <TextInput
                style={styles.input2}
                placeholder="Altura em centímetros"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
                />
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity  style={styles.calc} onPress={ CalcIMC }>
                    <Text>Calcular o IMC</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.result}>
            {/* Essa seção de código está de certa forma 'exportando' o valor de imc */}
                {/* Essa linha é 50% ChatGPT*/}
                {/* Eu precisava de uma maneira de atualizar o valor de IMC entre os arquivos */}
                {imc && <Text style={styles.resultText}>O seu índice de massa corpórea é de {imc}</Text>}

                {imc && <Classification imc={imc} />} 

                
                {height && <IdealWeight height={height} />}
                
            </View>
                
        </View>

);

}

export default Calculating;