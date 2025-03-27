import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const home = () => {
    const router = useRouter(); 

  return (
    <SafeAreaView className='w-screen h-screen'>
        <View className='w-full h-[50%] bg-black flex justify-center items-center'>
            <Text className='text-white'>Where your grievances will be answered</Text>
        </View>
        <View className='h-[50%] flex justify-center items-center'>
            <TouchableOpacity onPress={() => {router.push("/(onboarding)/auth")}} className='border-[1px] w-[100px] p-2 flex justify-center items-center border-black'>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default home