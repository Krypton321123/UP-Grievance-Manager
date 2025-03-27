import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    aadharNumber: '',
    mobileNumber: '',
    pincode: '',
    city: '',
    password: '',
  });

  const handleChange = (name: any, value: any) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-6">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 justify-center">
        <View className="bg-white rounded-2xl p-6 shadow-md">
          <Text className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</Text>
          
          {['firstName', 'lastName', 'aadharNumber', 'mobileNumber', 'pincode', 'city', 'password'].map((field, index) => (
            <View key={index} className="mb-3">
              <Text className="text-gray-700 text-sm mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</Text>
              <TextInput 
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2  focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                keyboardType={field === 'aadharNumber' || field === 'mobileNumber' || field === 'pincode' ? 'numeric' : 'default'}
                onChangeText={(text) => handleChange(field, text)}
              />
            </View>
          ))}

          <TouchableOpacity
            className="w-full bg-blue-500 py-3 rounded-lg mt-4 hover:bg-blue-600 active:bg-blue-700"
            onPress={() => router.push('/home')}>
            <Text className="text-center text-white font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
