import React from 'react'
import { Button } from 'react-native'

interface Props {
    title: string;
    onChangeText: () => void;
  }

export const ButtonScreen = ({title,onChangeText}:Props) => {
   
  return (
    <Button  title={title} onPress={onChangeText}/>
  )
}


