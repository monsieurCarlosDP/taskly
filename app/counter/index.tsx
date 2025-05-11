import { useRouter } from 'expo-router'
import React from 'react'
import { View, Text, Button } from 'react-native'

type Props = {}

const Counter = (props: Props) => {
    const router = useRouter();
  return (
    <View>
        <Button title='vete palla' onPress={()=>router.navigate('/idea')}/>
        <Text>Counter</Text>
    </View>
  )
}

export default Counter