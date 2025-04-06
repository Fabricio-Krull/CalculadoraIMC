import { View, Text, TextInput, StyleSheet, Button } from "react-native"


const Classification = ({ imc = 0 }) => {
    
    if (!imc) return null; // Se o imc não for válido, não exibe nada

    if (imc < 18.5) {
      return (
          <Text style={styles.text}>
            Classificação de IMC: Baixo peso (IMC baixo ou muito baixo)
          </Text>
      );
    }
  
    else if (imc >= 18.5 && imc <= 24.9) {
      return (
          <Text style={styles.text}>Classificação de IMC: Peso regular</Text>
      );
    }
  
    else if (imc >= 25 && imc <= 29.9) {
      return (
          <Text style={styles.text}>Classificação de IMC: Sobrepeso (IMC alto)</Text>
      );
    }
  
    else if (imc >= 30 && imc <= 34.9) {
      return (
          <Text style={styles.text}>Classificação de IMC: Obesidade grau I</Text>
      );
    }
  
    else if (imc >= 35 && imc <= 39.9) {
      return (
          <Text style={styles.text}>Classificação de IMC: Obesidade grau II</Text>
      );
    }
    else{

      return (
        <Text style={styles.text}>Classificação de IMC: Obesidade grau III</Text>
      );
    }
  };
  
  const styles = StyleSheet.create({
    text: {
      width: '100%',
      fontSize: 30,
      marginTop: '10%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


export default Classification;