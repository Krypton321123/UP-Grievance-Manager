import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface textInputProps {
    keyboardType: KeyboardTypeOptions | undefined
    label: string
    onChangeText: (text: string) => void
}

export default function CustomTextInput({ onChangeText, keyboardType, label }: textInputProps) {

    return (
        <View className="w-[200px] h-[100px] ">
            <Text className=" ml-10 text-xl font-bold mb-3">{label}</Text>
            <TextInput 
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                className="p-4 border-[1px] rounded-lg border-black mx-10"
            />
        </View>

       
    )
} 