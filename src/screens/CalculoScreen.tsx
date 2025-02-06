import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { InputScreen } from '../components/InputScreen';
import { ButtonScreen } from '../components/ButtonScreen';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface Numbers {
    num1: number | string; 
    num2: number | string;
}

export const CalculoScreen = () => {
    
    const navigation = useNavigation();

    const [numbers, setNumbers] = useState<Numbers>({
        num1: '',
        num2: '',
    });

    const [resultado, setResultado] = useState<string>('');  

    const handleDivision = () => {
        const n1 = parseFloat(numbers.num1 as string);
        const n2 = parseFloat(numbers.num2 as string);
        
        if (!numbers.num1 || !numbers.num2) {
            setResultado('Por favor ingrese ambos números');
            return;
        }

        if (n1 === 0 && n2 === 0) {
            setResultado('Indeterminado');
        }else if ( n2 === 0) {
            setResultado('no se puede dividir por 0');
        }else {
            setResultado((n1 / n2).toString());
        }
    };

    return (
        <View style={styles.conteiner}>
            <InputScreen placeholder="campo 1"  onChangeText={(text) => setNumbers({ ...numbers, num1: text })}  />
            <InputScreen placeholder="campo 2"  onChangeText={(text) => setNumbers({ ...numbers, num2: text })}  />

            <ButtonScreen title="Dividir" onChangeText={handleDivision} /> 
            
            <Text style={styles.text1}>Resultado: {resultado}</Text>

            <Button   title='Regresar'  onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Home' }))} />
        </View>
    );
};
