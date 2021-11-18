import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { AppScreen } from '../AppScreen';

export const MainWelcomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <AppScreen style={styles.screen}>
                <View style={styles.appTitle}>
                    <Text style={styles.titleText}>My Ecommerce</Text>
                </View>
                <View style={styles.btnsContainer}>
                <Button style={styles.btn} color="#607D8B" mode="contained" icon="email" onPress={() => navigation.navigate("Login")}>Login</Button>
                </View>
            </AppScreen>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#263238",
    },
    screen:{
        justifyContent: "center",
        alignItems: "center",
    },
    btnsContainer:{
        padding: 20,
        width: "100%",
        marginTop: 100
    },
    btn: {
        padding: 10,
        marginVertical: 10
    },
    appTitle:{
        marginVertical: 20
    },
    titleText:{
        fontSize: 30,
        fontWeight: "500",
        color:"white"
    }
})