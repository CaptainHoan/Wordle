import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const KEYBOARD = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A','S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'CLEAR']
]

const {width, height}: {width: number, height: number} = Dimensions.get('screen')

const KeyBoard = () => {
  return (
    <View className='items-center justify-between absolute bottom-20 self-center'>
      {
        KEYBOARD.map((keys, index) => (
          <View 
            key={index} 
            className="flex-row space-x-1 items-center justify-between "
          >
            {keys.map((key, index) => (
              <View 
                key={index} 
              >
                <TouchableOpacity
                  style={{width: key === 'CLEAR' ? 55 : 35}} 
                  className='bg-white h-10 items-center justify-evenly rounded-lg'
                >
                  <Text className='text-center font-bold'>{key}</Text>
                </TouchableOpacity>
                <View className='h-1'></View>
              </View>
            ))}
          </View>
        ))
      }
    </View>
  )
}

export default KeyBoard