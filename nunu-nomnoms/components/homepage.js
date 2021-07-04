
import React from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Order from "./order";


const styles = StyleSheet.create({
    container: {
        top: 454,
        backgroundColor: "#5AC8FA"
    },

    Header: {
        color: '#FFF',
        alignItems: 'center',
        fontSize: 50,
        top: 50,
        left: 20,
        justifyContent: 'space-between'

    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 30,
        top: 60,
        left: 30,
        backgroundColor: '#00160A',
        width: 355
    },

    buttonText:{
        color: '#FFF',
        fontSize: 25,
    },
    
    body: {
        backgroundColor: "#5AC8FA",
        flex: 1
    }

})

function Home({navigation}) {
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.Header}>Nunu's nomnoms</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Order')}>
                    <View>
                        <Text style={styles.buttonText}>Order Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home