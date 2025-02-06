import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { InputScreen } from '../components/InputScreen'
import { ButtonScreen } from '../components/ButtonScreen';
import { styles } from '../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {};

export const CalculoScreen = ({navigation }: Props) => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('');

    const handleDivision = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (n1===0 &&n2 === 0) {
            setResultado('Indeterminado');
        } else if (n2 === 0) {
            setResultado('No se puede dividir para cero');
        } else {
            setResultado((n1 / n2).toString());
        }
    }

  return (
    <View style={styles.conteiner}>
        <InputScreen  placeholder="Numero 1"  onChangeText={(text) => setNum1(text)}  />
        <InputScreen placeholder="Numero 2" onChangeText={(text) => setNum2(text)}  />

        <ButtonScreen title="Dividir" onChangeText={handleDivision}   />
        <Text style={styles.text1}>Resultado: {resultado}</Text>
       

        <Button  title='Regresar'  onPress={() => navigation.goBack()} />
    </View>
  )
}


