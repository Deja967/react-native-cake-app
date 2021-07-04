import React from "react";
import{
    View, Image, TouchableOpacity, StyleSheet
} from "react-native"
import {createBottomTabNavigator, BottomNavigator} from "@react-navigation/bottom-tabs"
import Home from "../components/homepage";
import Order from "../components/order";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Order"
                component={Order} />
        </Tab.Navigator>
    )
}
export default Tabs
