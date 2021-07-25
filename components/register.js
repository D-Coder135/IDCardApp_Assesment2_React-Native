import React, {useState, useEffect} from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather'
import {Card} from 'react-native-paper';
import db from '../firebaseConfig';

const register = ({navigation}) => {

    const [name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[mobile, setMobile] = useState('');
    const[location, setLocation] = useState('');
    const[detailsArray, setArray] = useState([]);

    const addToDatabase = () => {
        const details = db.ref('details');
            const newDetails = {
                name: name,
                email: email,
                mobile: mobile,
                location: location
            }
            details.push(newDetails);

            // setName('');
            // setEmail('');
            // setMobile('');
            // setLocation('');
        }

    return (
        <View style = {styles.homepage}>
            <View style = {styles.header}>
                <Card>
                    <Text style = {styles.headerText}>
                        Registration
                    </Text>
                    <Pressable style = {styles.backButton} onPress = {()=> {navigation.navigate('home')}}>
                    <Icon name = {'caret-left'} size = {50} color = {'black'}/>
                    </Pressable>
                </Card>
            </View>

            <View style = {styles.body}>
                <TextInput 
                style = {styles.inputText} 
                placeholder = 'Enter Your Name'
                onChangeText = {(text) => {setName(text)}}
                >
                </TextInput>
                <Icon style = {styles.userIcon} name = {'user'} size = {35} color = {'black'}/>

                <TextInput 
                style = {styles.inputText} 
                placeholder = 'Enter Your Email' 
                onChangeText = {(text) => {setEmail(text)}}
                >
                </TextInput>
                <Icons style = {styles.emailIcon} name = {'mail'} size = {35} color = {'black'}/>

                <TextInput 
                style = {styles.inputText} 
                placeholder = 'Enter Your Mobile'
                onChangeText = {(text) => {setMobile(text)}}
                
                >
                </TextInput>
                <Icon style = {styles.mobileIcon} name = {'mobile'} size = {50} color = {'black'}/>

                <TextInput 
                style = {styles.inputText} 
                placeholder = 'Enter Your City'
                onChangeText = {(text) => {setLocation(text)}}
                >
                </TextInput>
                <Icon style = {styles.locationIcon} name = {'location-arrow'} size = {40} color = {'black'}/>

                <Pressable 
                style = {styles.bodyButton}
                onPress = {addToDatabase}
                >
                        <Text style = {styles.buttonText}> Register </Text>
                    </Pressable>

                <Pressable style = {styles.checkProfileButton} onPress = {()=> {navigation.navigate('profile')}}>
                    <Text style = {styles.buttonText}> Check Profile </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default register;

const styles = StyleSheet.create({
    homepage: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        paddingTop: Constants.statusBarHeight,
    },

    backButton: {
        position: 'absolute',
        top: 5,
        height: '100%',
        width: '20%',
        padding: 10,
        justifyContent: 'center',
    },

    inputText: {
        // backgroundColor: 'white', 
        padding: 10, 
        // marginTop: 20, 
        marginBottom: 50, 
        // borderRadius: 10, 
        // textAlign: 'center', 
        width: '85%',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
      },

      userIcon: {
          position: 'absolute',
          left: 10,
          top: 10,
      },

      locationIcon: {
        position: 'absolute',
        left: 3,
        top: 305,
    },

      emailIcon: {
        position: 'absolute',
        left: 4,
        top: 108,
    },

    mobileIcon: {
        position: 'absolute',
        left: 10,
        top: 200,
    },

    header: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 30,
        padding: 8,
    },

    body: {
        flex: 9,
        // justifyContent: 'center',
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
        width: '35.33%',
        height: 40,
        justifyContent: 'center',
        margin: 50,
    },

    checkProfileButton: {
        backgroundColor: 'purple',
        width: '50.33%',
        height: 50,
        justifyContent: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
});