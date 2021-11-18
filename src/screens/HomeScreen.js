import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ProductContext } from '../context/Product.context';
import { ActivityIndicator } from 'react-native-paper';
import { AppCard } from '../components/AppCard/AppCard';
import { AppScreen } from '../AppScreen';

const HomeScreen = ({navigation}) => {

    const {isLoading, products} = useContext(ProductContext)

    if(isLoading){
        return(
            <View style={styles.prodLoading}>
                <ActivityIndicator animating={true} size="large" />
                <Text style={styles.loading}>Loading Products</Text>
            </View>
        )
    }

    return(
        <AppScreen>
            <View>
                <Text style={{marginHorizontal: 89.5, fontSize: 20}}>Welcome UserName_24</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} 
                                        data={products} keyExtractor={(item) => item.id}
                                        renderItem={({item}) => <AppCard title={item.title} 
                                                                         price={item.price} 
                                                                         image={item.image} 
                                                                         items={item} 
                                                                         
                                                                         onPress={() => navigation.navigate("Details", {product: item})}
                                                                         
                                                                         /> }/>
            </View>
            <View>
                <Text style={{marginHorizontal: 20, fontSize: 20}}>Shoes</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} 
                                        data={products} keyExtractor={(item) => item.id}
                                        renderItem={({item}) => <AppCard title={item.title} 
                                                                         price={item.price} 
                                                                         image={item.image} 
                                                                         items={item} 
                                                                         
                                                                         onPress={() => navigation.navigate("Details", {product: item})}
                                                                         
                                                                         /> }/>
            </View>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    prodLoading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loading:{
        marginVertical: 10
    }
})

export default HomeScreen