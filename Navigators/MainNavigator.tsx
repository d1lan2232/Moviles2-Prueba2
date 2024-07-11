import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegistroScreen from '../Screens/RegistroScreen';
import OperacionesScreen from "../Screens/OperacionesScreen"
import HistorialScreen from "../Screens/HistorialScreen"
import PerfilScreen from "../Screens/PerfilScreen"

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Tab" component={MyTabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Operaciones" component={OperacionesScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Historial" component={HistorialScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}


export default function MainNavigator() {
  return (
    <NavigationContainer>
       <MyStack />
    </NavigationContainer>
  )
}

