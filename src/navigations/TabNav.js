import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import UserScreen from '../screens/UserScreen';
import { StackNav } from './StackNav';
import { AntDesign } from '@expo/vector-icons'
import { MainWelcomeScreen } from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

const TabIcons = {
    Login: "login",
    Home: "home",
    Cart: "shoppingcart",
    User: "user",
    Logout: "logout"
}

export const TabNav = () => {
    return(
        <Tab.Navigator tabBarOptions={{showLabel: false}} screenOptions={({route}) => ({
            tabBarIcon: ( {size, color}) => {
                const iconName = TabIcons[route.name]
                return <AntDesign name={iconName} size={size} color={color} />
            },
            headerShown: false,
        })}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Home" component={StackNav} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="User" component={UserScreen} />
            
            
        </Tab.Navigator>
    )
}