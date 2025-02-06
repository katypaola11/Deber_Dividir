import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme';

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
  }

export const InputScreen = ( {placeholder ,onChangeText}: Props) => {
  return (
 
     <TextInput style={{...styles.input}} placeholder={placeholder} onChangeText={onChangeText}  />
   
    )
}


