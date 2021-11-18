import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppScreen } from '../AppScreen';
import { Button, TextInput } from 'react-native-paper';

const LoginScreen = ({navigation}) => {
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.appTitle}>
                    <Text style={styles.titleText}>My Ecommerce</Text>
                </View>
            <View style={styles.form}>
                <Text style={{fontSize:20, marginBottom:10}}>Welcome! Enter your Email and Password </Text>
                <TextInput mode="outlined" label="E=Mail"/>
                <TextInput secureTextEntry={true} mode="outlined" label="Password"/>
            </View>
            <View style={{marginVertical: 10, padding: 10}}>
                <Button icon="email" mode="contained" style={{padding: 10}} onPress={() => navigation.navigate("Home")}>Login</Button>
            </View>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    form:{
        padding: 10,
        width: "100%",
    },
    appTitle:{
        marginVertical: 20
    },
    titleText:{
        fontSize: 30,
        fontWeight: "500",
        color:"#212121",
        marginBottom: 20
    }
})

export default LoginScreen