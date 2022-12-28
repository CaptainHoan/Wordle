import { View, Text } from 'react-native'
import React from 'react'

const ARRAY1: string[] = ['Q', 'W', 'E', 'R', 'T']
const ARRAY2: string[] = ['', '', '', '', '']
const ARRAY3: string[] = ['', '', '', '', '']
const ARRAY4: string[] = ['', '', '', '', '']
const ARRAY5: string[] = ['', '', '', '', '']

const WordBoard = () => {
  return (
    <View className='mt-20'>
      <WordSpace words={ARRAY1} />
      <WordSpace words={ARRAY1} />
      <WordSpace words={ARRAY1} />
      <WordSpace words={ARRAY1} />
      <WordSpace words={ARRAY1} />
      <WordSpace words={ARRAY1} />
    </View>
  )
}

const WordSpace = ({words}: {words: string[]}) => {
    return (
      <>
        <View className='flex-row items-center justify-center'>
            {
              words.map((word, index) => (
                <View key={index} 
                  className="w-12 h-12 bg-white mr-2 items-center justify-evenly rounded-md"
                >
                  <Text className='font-bold text-xl'>{word}</Text>
                </View>
              ))
            }
        </View>
        <View className='h-2'></View>
      </>  
    )
}

export default WordBoard