import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import { MainWelcomeScreen } from '../screens/WelcomeScreen';

const Stack = createStackNavigator()

export const AuthNav = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={MainWelcomeScreen} />
        </Stack.Navigator>
    )
}