import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ChatListScreen from "../screens/ChatListScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainTabs from "../components/MainTabs";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="Chats" component={ChatListScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
