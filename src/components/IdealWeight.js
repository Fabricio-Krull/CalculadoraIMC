import { useState } from "react";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


const IdealWeight = ( { height } ) => {


    // Declarando as variáveis de peso minimo e máximo ideais
    const [calculatedMaxIdealWeight, setCalculatedMaxIdealWeight] = useState(0);
    const [calculatedMinIdealWeight, setCalculatedMinIdealWeight] = useState(0);

    const calculateIdealWeight = () => { // Função que inicializa os valores de ambas as variáveis declaradas anteriormente
        setCalculatedMaxIdealWeight((24.9 * ((height/100)*(height/100))).toFixed(2));
        setCalculatedMinIdealWeight((18.5 * ((height/100)*(height/100))).toFixed(2));
    }

   
        return(
            <View style={styles.view}>
                <TouchableOpacity onPress={calculateIdealWeight} style={styles.calc}>
                    <Text style={styles.text2}>Calcular o peso ideal</Text>
                </TouchableOpacity>

                <Text style={styles.text2}>O seu peso mínimo ideal é de {calculatedMinIdealWeight}Kg</Text>        
                <Text style={styles.text2}>O seu peso máximo ideal é de {calculatedMaxIdealWeight}Kg</Text>    
            </View>
    );
}

const styles = StyleSheet.create({ // Não vou comentar a estilização

    view: {

        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

    },

    calc: {

        display: 'flex',
        width: "90%",
        height: "40%",
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: "#A2A3A0",
        borderRadius: 15,

    },

    text2: {

        fontSize: 25,
        width: '100%',
        height: '30%',

    },

});

export default IdealWeight;