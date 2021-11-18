import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppCard } from '../components/AppCard/AppCard';
import { AppScreen } from '../AppScreen';
import { Button, List } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/cart.redux';

const DetailsScreen = ({route}) => {

    const {product} = route.params

    const dispatch = useDispatch()

    const addtoCart= () => {
        dispatch(cartActions.addtoCart(product))
    }

    return(
        <AppScreen>
            <ScrollView>
            <View>
                <AppCard style={styles.card} imgContainer={styles.imgContainer} title={product.title} price={product.price} image={product.image} items={product} />
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} color="#263238" onPress={addtoCart} icon="shopping" mode="contained">Add to cart</Button>
            </View>
            <List.Section title={`${product.title} Details`} >
                <List.Accordion title="Product Information" left={()=> <List.Icon icon="information" />}>
                    <List.Item description={product.description} />
                </List.Accordion>
                <List.Accordion title="Ratings" left={()=> <List.Icon icon="star" />}>
                    <List.Item title="5/5" />
                </List.Accordion>
            </List.Section>
            </ScrollView>
        </AppScreen>
    )
}



const styles = StyleSheet.create({
    card:{
        backgroundColor: "#263238",
        width: "100%",
        margin: 0,
        borderRadius: 5,
    },
    imgContainer:{
        height: 330,
    },
    btnContainer:{
        padding: 10,
    },
    btn:{
        padding: 10,
    },
})

export default DetailsScreen