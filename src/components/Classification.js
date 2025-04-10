import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Classification = ({ imc = 0 }) => {
  const [color, setColor] = useState(""); // Estado para a cor de fundo da classificação
  const [classificationText, setClassificationText] = useState(""); // Estado para o texto da classificação

  if (!imc) return null; // Se o IMC não for válido, não exibe nada
  
  // Atualiza o texto da classificação e a cor com base no IMC
  useEffect(() => { // a cor e o texto TEM QUE mudar quando o imc mudar para certos valores
    if (imc < 18.5) {
      setClassificationText("Baixo peso (IMC baixo ou muito baixo)");
      setColor("d008");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificationText("Peso regular");
      setColor("0f08");
    } else if (imc <= 29.9) {
      setClassificationText("Sobrepeso (IMC alto)");
      setColor("8008");
    } else if (imc <= 34.9) {
      setClassificationText("Obesidade grau I");
      setColor("a008");
    } else if (imc <= 39.9) {
      setClassificationText("Obesidade grau II");
      setColor("c008");
    } else if (imc >= 40) {
      setClassificationText("Obesidade grau III");
      setColor("f008");
    }
  }, [imc]);


  
  const styles = StyleSheet.create({ // Não vou comentar a estilização
    text: {
      width: '100%',
      backgroundColor: `#${color}`, // Usando o valor de `color` para o fundo
      fontSize: 30,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Para centralizar o texto
    },
  });

  return (
    <View style={{ marginTop: '5%', marginBottom: '5%' }}>
      <Text style={styles.text}>Classificação de IMC: {classificationText}</Text>
    </View>
  );
};

export default Classification;