import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-gray-100 p-4'>
      <View className='w-full max-w-md space-y-6'>
        <Text className='text-2xl font-bold text-center mb-6'>Grievance Portal</Text>

        <TouchableOpacity 
          className='w-full mb-4 h-[25%] bg-white p-6 rounded-2xl shadow-md border border-gray-300 flex items-center justify-center'
          onPress={() => router.push('/(main)/GrievanceForm')}
          activeOpacity={0.8}
        >
          <Text className='text-2xl font-semibold text-blue-600'>📌 Add a Grievance</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className='w-full mb-4 h-[25%] bg-white p-6 rounded-2xl shadow-md border border-gray-300 flex items-center justify-center'
          onPress={() => router.push('/(main)/PreviousGrievances')}
          activeOpacity={0.8}
        >
          <Text className='text-2xl font-semibold text-green-600'>📜 Check Previous Grievances</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className='w-full h-[25%] bg-white p-6 rounded-2xl shadow-md border border-gray-300 flex items-center justify-center'
          onPress={() => router.push('/(main)/CheckStatus')}
          activeOpacity={0.8}
        >
          <Text className='text-2xl font-semibold text-yellow-600'>🔍 Check Grievance Status</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;