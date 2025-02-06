import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';



export const LoginScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Bienvenidos App Movil</Text>

      <Image style={styles.image} source={require('../assets/login.jpg')} />
      <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Formulario' }))} >
        <Text style={styles.button} >Acceder</Text>
      </TouchableOpacity>
    </View>
  )
}


