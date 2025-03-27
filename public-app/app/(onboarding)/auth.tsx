
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Auth = () => {
  const router = useRouter(); 

  return (
    <SafeAreaView className="w-screen h-screen">
      {/* Gradient Background */}
      <LinearGradient colors={['#3B82F6', '#ffffff']} className="w-full h-full flex items-center justify-center">
        
        {/* Heading */}
        <Text className="text-2xl font-bold text-white mb-6">Welcome to Grievance Portal</Text>

        {/* Buttons Container */}
        <View className="w-full flex gap-6 items-center">
          <TouchableOpacity 
            onPress={() => router.push('/(onboarding)/signup')} 
            className="w-[150px] bg-blue-600 p-3 rounded-lg shadow-lg flex items-center justify-center active:bg-blue-700"
          >
            <Text className="text-white text-lg font-semibold">Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(onboarding)/login')} 
            className="w-[150px] bg-white p-3 rounded-lg shadow-lg border border-blue-600 flex items-center justify-center active:bg-gray-100"
          >
            <Text className="text-blue-600 text-lg font-semibold">Log In</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Auth;



