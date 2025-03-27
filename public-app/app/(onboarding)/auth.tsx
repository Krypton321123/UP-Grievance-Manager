import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useRouter } from 'expo-router'

const auth = () => {

  const router = useRouter(); 

  return (
    <SafeAreaView className='w-screen h-screen'>
      <View className='w-full h-[30%] flex gap-4 mt-4 items-center'>
        <TouchableOpacity onPress={() => {router.push('/(onboarding)/signup')}} className='w-[100px] border-[1px] border-black p-2 flex items-center justify-center'>
            <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {router.push('/(onboarding)/login')}} className='w-[100px] p-2 border-[1px] border-black flex items-center justify-center'>
            <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default auth