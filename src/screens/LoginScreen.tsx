import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text ,TouchableOpacity, Image} from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {};

export const LoginScreen = ({navigation }: Props) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Bienvenidos App Movil</Text>

      <Image style={styles.image}  source={require('../assets/login.jpg')}   />
    <TouchableOpacity   onPress={() => navigation.navigate('Formulario')} >
        <Text style={styles.button} >Acceder</Text>
    </TouchableOpacity>
    </View>
  )
}


