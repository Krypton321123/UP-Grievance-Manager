import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";

export default function GrievanceForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    user_id: "", // You might fetch this from storage or context
    image: "",
    type: "",
    priority: "",
    pincode: "",
    city: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (!form.title || !form.description || !form.type || !form.pincode || !form.city) {
        return Alert.alert("Error", "Please fill all required fields");
      }

      const response: any = await axios.post(`http://localhost:8000/api/grievance/create`, form);

      if (response.status === 200) {
        Alert.alert("Success", "Grievance submitted successfully!");
        router.push("/home"); // Redirect to home page
      } else {
        Alert.alert("Error", response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Grievance submission error:", error);
      Alert.alert("Error", "Failed to submit grievance");
    }
  };

  return (
    <ScrollView className="flex-1 p-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-center">Submit Grievance</Text>

      {/* Title */}
      <View className="mb-3">
        <Text className="text-sm font-medium">Title</Text>
        <TextInput className="border rounded-lg p-2 bg-white" placeholder="Enter title" onChangeText={(text) => handleChange("title", text)} />
      </View>

      {/* Description */}
      <View className="mb-3">
        <Text className="text-sm font-medium">Description</Text>
        <TextInput className="border rounded-lg p-2 bg-white h-20" placeholder="Enter description" multiline onChangeText={(text) => handleChange("description", text)} />
      </View>

      {/* Type */}
      <View className="mb-3">
        <Text className="text-sm font-medium">Type</Text>
        <TextInput className="border rounded-lg p-2 bg-white" placeholder="Enter grievance type" onChangeText={(text) => handleChange("type", text)} />
      </View>


      {/* Pincode */}
      <View className="mb-3">
        <Text className="text-sm font-medium">Pincode</Text>
        <TextInput className="border rounded-lg p-2 bg-white" placeholder="Enter pincode" keyboardType="numeric" onChangeText={(text) => handleChange("pincode", text)} />
      </View>

      {/* City */}
      <View className="mb-3">
        <Text className="text-sm font-medium">City</Text>
        <TextInput className="border rounded-lg p-2 bg-white" placeholder="Enter city" onChangeText={(text) => handleChange("city", text)} />
      </View>

      {/* Submit Button */}
      <TouchableOpacity className="bg-blue-500 py-3 rounded-lg mt-3" onPress={handleSubmit}>
        <Text className="text-white text-center font-semibold">Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}