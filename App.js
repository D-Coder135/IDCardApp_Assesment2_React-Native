import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import home from './components/home';
import profile from './components/profile';
import register from './components/register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {


  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator screenOptions = {{headerShown: false}}>
          <Stack.Screen name = {'home'} component = {home} />
           <Stack.Screen name = {'register'} component = {register} />
           <Stack.Screen name = {'profile'} component = {profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
});
