import React, { createContext, useState } from 'react';

export const FavouriteContext = createContext()

export const FavouriteContextProvider = ({children}) => {
    const [isFavored, setIsFavored] = useState([])

    //Agregar Favoritos

    const addFavs = (product) => {
        setIsFavored([...isFavored, product])
    }

    //Quitar Favoritos

    const removeFavs = (product) => {
        const newFavs = isFavored.filter((p) => p.id !== product.id)
        setIsFavored(newFavs)
    }


    return(
        <FavouriteContext.Provider
        value={{
            isFavored,
            add: addFavs,
            remove: removeFavs
        }}
        >
            {children}
        </FavouriteContext.Provider>
    )
} 