import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import { MainWelcomeScreen } from '../screens/WelcomeScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createStackNavigator()

export const StackNav = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false, ...TransitionPresets.FadeFromBottomAndroid}}>
            <Stack.Screen name="My Ecommerce" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Logout" component={MainWelcomeScreen} />
            <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
    )
}