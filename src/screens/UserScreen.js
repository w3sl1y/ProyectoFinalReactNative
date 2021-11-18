import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AppScreen } from '../AppScreen';

const UserScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <AppScreen style={styles.screen}>
                <View style={styles.appTitle}>
                    <Text style={styles.titleText}>My Account</Text>
                </View>
                <View style={styles.btnsContainer}>
                <Button style={styles.btn} color="#607D8B" mode="contained" icon="account" >UserName_24</Button>
                <Text style={styles.horizontal}>Agustín Navarro</Text>
                <Button style={styles.btn} color="#263238" mode="contained" icon="map" >My Direction</Button>
                <Text style={styles.horizontal}>Agustín Navarro</Text>
                <Text style={styles.horizontal}>Calle 0001</Text>
                <Text style={styles.horizontal}>Valencia Sagunto, 46500</Text>
                <Text style={styles.horizontal}>España</Text>
                <Text style={styles.horizontal}>Número de teléfono: 111222333</Text>
                <Button style={styles.btn} color="#607D8B" mode="contained" icon="bank" >My Card</Button>
                <Text style={styles.horizontal}>Agustín Ricardo Valencia Navarro</Text>
                <Text style={styles.horizontal}>1111 2222 3333 4444</Text>
                <Text style={styles.horizontal}>01/27</Text>
                <Text style={styles.horizontal}>Visa 321</Text>
                <Button style={styles.btnBottom} color="#263238" mode="contained" icon="logout" onPress={() => navigation.navigate("Login")}>Log Out</Button>
                </View>
            </AppScreen>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
    },
    screen:{
        justifyContent: "center",
        alignItems: "center",
    },
    btnsContainer:{
        padding: 10,
        width: "100%",
    },
    btn: {
        padding: 10,
        marginVertical: 10
    },
    btnBottom: {
        padding: 10,
        marginTop: 90
    },
    appTitle:{
        marginVertical: 20
    },
    titleText:{
        fontSize: 30,
        fontWeight: "500",
        color:"#212121"
    },
    horizontal:{
        marginHorizontal:10
    }
})

export default UserScreen