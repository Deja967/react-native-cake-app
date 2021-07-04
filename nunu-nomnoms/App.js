import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/homepage';
import Order from './components/order';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AC8FA',
  },
});


export default function App() {
  return (
      <NavigationContainer style={styles.container}>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Order" component={Tabs} />
          </Stack.Navigator>
        </NavigationContainer>

  );
}

// const heading = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '527',
//     marginBottom: '138',
//     fontSize: 55,
//     fontFamily: 'Schoolbell-Regular',
//     marginBottom: 138,
//     marginTop: 388,
//     width: 700
//   },
// });


