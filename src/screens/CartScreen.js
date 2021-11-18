import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { AppScreen } from '../AppScreen'
import { CartItems } from '../components/cartItems/CartItems';

const CartScreen = () => {

    const cart = useSelector(state => state.cart.items)

    const totalPrice = useSelector(state => state.cart.totalPrice)

    return(
        <View style={styles.container}>
            <AppScreen style={{flex: 1}}>
                <FlatList 
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CartItems items={item} />}
                />
                <View style={styles.bottomContent}>
                    <Text style={styles.bottonText}>Total Amount :${Math.floor (totalPrice)}</Text>
                    <Button icon="cart" color="#eee" style={{backgroundColor: "#000", padding: 10}}>
                        <Text>CHECKOUT</Text>
                    </Button>
                </View>
            </AppScreen>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    bottonText:{
        fontSize: 19,
        fontWeight: "600",
        color: "#212121"
    },
    bottomContent:{
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        padding: 10,
        borderRadius: 6
    }
})

export default CartScreen