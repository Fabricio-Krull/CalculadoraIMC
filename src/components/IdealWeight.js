import { useState } from "react";
import React from "react";
import { Text, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity } from "react-native";
import { Touchable } from "react-native";


const IdealWeight = ( { height, genderValue } ) => {

    const [idealWeight, setIdealWeight] = useState(0);
    var calculatedIdealWeight = 0;


    const calculateIdealWeight = () =>{

        
        if(genderValue == "Homem"){
            calculatedIdealWeight = (52 + (0.75 * ( height - 152.4))).toFixed(2);
        }
        else{
            calculatedIdealWeight = (52 + (0.67 * ( height - 152.4))).toFixed(2);
        }
        setIdealWeight(calculatedIdealWeight);
    }
     
        return(
            <View style={styles.view}>
                <TouchableOpacity onPress={calculateIdealWeight} style={styles.calc}>
                    <Text>Calcular o peso ideal para: {genderValue}</Text>
                </TouchableOpacity>

                <Text>O seu peso ideal é de {idealWeight}Kg</Text>            
            </View>
    );
}

const styles = StyleSheet.create({

    view: {

        display: 'flex',
        height: '200%',
        width: '100%',

    },

    calc: {

        backgroundColor: "green",

    }

});

export default IdealWeight;