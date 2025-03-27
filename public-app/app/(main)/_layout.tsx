import { Stack } from "expo-router";

export default function mainLayout() {

    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="home" />
            <Stack.Screen name="addGrievance" options={{ headerShown: false }}/>
        </Stack>
    )
}