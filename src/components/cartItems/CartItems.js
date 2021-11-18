import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { IconButton } from '../../iconButton/IconButton';
import { cartActions } from '../../redux/cart.redux';

export const CartItems =({items}) => {
    const {image, title, price, qty, totalAmount} = items

    const dispatch = useDispatch()

    const incrementQuantity = () => {
        dispatch(cartActions.addtoCart(items))
    }

    const decrementQuantity = () => {
        dispatch(cartActions.removeItem(items))
    }

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}} />
            </View>


            <View style={styles.body}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>${price}</Text>
                <Text style={styles.totalAmount}>${totalAmount}</Text>
            </View>


            <View style={styles.rightContent}>
                <IconButton onPress={decrementQuantity} iconName="minus" size={40} backgroundColor="#6555" color="#000" />
                <Text style={styles.qty}>{qty}</Text>
                <IconButton onPress={incrementQuantity} iconName="plus" size={40} backgroundColor="#6555" color="#000" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ccc",
        padding: 10,
        margin: 5
    },
    imageContainer:{
        height: 60,
        width: 60,
        marginRight: 16
    },
    image:{
        width: "100%",
        height: "100%"
    },
    body:{
        flex: 2
    },
    rightContent:{
        flexDirection: "row",
        alignItems: "center"
    },
    qty: {
        marginHorizontal: 16
    },
    title:{
        fontSize: 17,
        fontWeight: "600"
    },
    price:{
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 3
    },
    totalAmount:{
        fontSize: 18,
        fontWeight: "600"
    }
})