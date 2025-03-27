import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Login() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-gray-100 p-4'>
      <View className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        <Text className='text-2xl font-bold text-center mb-4'>Login</Text>

        <View className='mb-4'>
          <Text className='text-sm font-medium mb-1'>Aadhar Number</Text>
          <TextInput 
            keyboardType='numeric' 
            maxLength={12} 
            className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your Aadhar Number' 
            value={aadharNumber} 
            onChangeText={setAadharNumber} 
          />
        </View>

        <View className='mb-4'>
          <Text className='text-sm font-medium mb-1'>Password</Text>
          <TextInput 
            secureTextEntry 
            className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your Password' 
            value={password} 
            onChangeText={setPassword} 
          />
        </View>

        <TouchableOpacity onPress={() => {router.push('/(main)/home')}} className='w-full bg-blue-500 py-3 rounded-lg mt-2 hover:bg-blue-600'>
          <Text className='text-center text-white font-semibold'>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}