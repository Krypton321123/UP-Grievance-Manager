// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useRouter } from 'expo-router';

// const Home = () => {
//     const router = useRouter(); 

//     return (
//         <SafeAreaView className='w-screen h-screen bg-white'>
//             {/* Top Section */}
//             <View className='w-full h-[50%] bg-blue-600 flex justify-center items-center'>
//                 <Text className='text-white text-lg font-semibold text-center'>
//                     Where your grievances will be answered
//                 </Text>
//             </View>

//             {/* Bottom Section */}
//             <View className='h-[50%] flex justify-center items-center'>
//                 <TouchableOpacity 
//                     onPress={() => { router.push("/(onboarding)/auth") }} 
//                     className='bg-blue-500 w-[120px] py-3 rounded-lg shadow-lg flex justify-center items-center'
//                 >
//                     <Text className='text-white font-medium text-lg'>Next</Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// };

// export default Home;




import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    const router = useRouter(); 

    return (
        <SafeAreaView className="w-screen h-screen">
            {/* Gradient Background */}
            <LinearGradient 
                colors={['#3B82F6', '#ffffff']} 
                className="w-full h-full flex items-center justify-center"
            >
                {/* Welcome Text */}
                <Text className="text-white text-2xl font-bold text-center mb-10">
                    Where your grievances will be answered
                </Text>

                {/* Next Button */}
                <TouchableOpacity 
                    onPress={() => router.push("/(onboarding)/auth")} 
                    className="bg-white w-[150px] py-3 rounded-lg shadow-lg border border-blue-600 flex justify-center items-center active:bg-gray-100"
                >
                    <Text className="text-blue-600 font-semibold text-lg">Next</Text>
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default Home;
