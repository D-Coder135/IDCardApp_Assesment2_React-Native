import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Pressable } from 'react-native'; 
import {Card} from 'react-native-paper';

const home = ({navigation}) => {

    return (
        <View style = {styles.homepage}>
            <View style = {styles.header}>
                <Card>
                    <Text style = {styles.headerText}>
                        Home
                    </Text>
                </Card>
            </View>

            <View style = {styles.body}>
                <Card>
                    <Text style = {styles.bodyText}>
                        Welcome To The Profile Creator App.
                    </Text>

                    <Pressable style = {styles.bodyButton} onPress = {()=> {navigation.navigate('register')}}>
                        <Text style = {styles.buttonText}> Get Register </Text>
                    </Pressable>
                </Card>
            </View>
        </View>
    );
}

export default home;


const styles = StyleSheet.create({
    homepage: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        paddingTop: Constants.statusBarHeight,
    },

    header: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 30,
        padding: 10,
    },

    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        height: '100%',
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    bodyText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 30,
        marginTop: 60,
    },

    bodyButton: {
        backgroundColor: 'blue',
        width: '33.33%',
        height: 40,
        justifyContent: 'center',
        margin: 130,
    },

    buttonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
});