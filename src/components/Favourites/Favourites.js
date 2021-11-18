import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavouriteContext } from '../../context/Favourite.context';

export const Favourite = ({product}) => {

    const {add, remove, isFavored} = useContext(FavouriteContext)

    const isSaved = isFavored.find(e => e.id === product.id)

    return(
        <TouchableOpacity style={styles.favs} onPress={() => !isSaved ? add(product) : remove(product)}>
            <AntDesign size={40} color={!isSaved ? "#1e6091": "red"} name={!isSaved ? "hearto" : "heart"} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    favs: {
        position: "absolute",
        left: 10,
        top: 30,
        zIndex: 100,
    }
})