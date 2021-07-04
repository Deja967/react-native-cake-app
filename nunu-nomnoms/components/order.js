import React from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View, Alert, KeyboardAvoidingView, TextInput } from 'react-native';
import 'react-native-gesture-handler';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AC8FA',
    },
    Header: {
        color: '#FFF',
        alignItems: 'center',
        fontSize: 50,
        top: 50,
        left: 20,
        justifyContent: 'space-between'

    },

    text: {
        top: 102,
        alignItems: 'center',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 40,
        paddingRight: 40
    },

    categoriestext: {
        top: 240,
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 40,
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

    categorybutton: {
        left: 40,
        top: 260,
        backgroundColor: '#000000',
        width: 102,
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 25,
        height: 57,
    },

    flex:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex',
        
        

    },

    buttonText: {
        color: '#FFF',
        fontSize: 13.5,
        top: 20,
        left: 15
    },

    input: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: 366.87,
        height: 71,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        top: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50
    },

    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: 366,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 40,
        top: 79
    },
    body: {
        backgroundColor: "#5AC8FA",
        flex: 1
    }
})



function Order(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>What would you like to order?</Text>
                <KeyboardAvoidingView style={styles.writeTaskWrapper}>
                    <TextInput style={styles.input} placeholder={'Search...'} />
                    <TouchableOpacity></TouchableOpacity>
                </KeyboardAvoidingView>
                <Text style={styles.categoriestext}>Categories</Text>
                <View style={styles.flex}>
                    <TouchableOpacity  style={styles.categorybutton}>
                        <View>
                            <Text style={styles.buttonText}>Cakes</Text>
                        </View> 
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.categorybutton}>
                        <View>
                            <Text style={styles.buttonText}>Cakes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.categorybutton}>
                        <View>
                            <Text style={styles.buttonText}>Cakes</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Order