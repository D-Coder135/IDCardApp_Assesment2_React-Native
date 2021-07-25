import React, {useState, useEffect} from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Pressable } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-paper';
import db from '../firebaseConfig';


const profile = ({navigation}) => {

    const[userDetails, setDetails] = useState([]);
    const [user, setUser] = useState('');

    useEffect(()=> {
        const firebaseData = db.ref('details');
        firebaseData.on('value', (data) => {
            const details = data.val();
            const detailsList = [];
            
            for(var id in details) {
                detailsList.push({id, ...details[id]});
            }
            setDetails(detailsList);
            userDetails.map((index, item) => {
                setUser(index);
            });
        });
    }, []);

    return (
        <View style = {styles.homepage}>
            <View style = {styles.header}>
                <Card>
                    <Text style = {styles.headerText}>
                        Profile
                    </Text>
                    <Pressable style = {styles.backButton} onPress = {()=> {navigation.navigate('register')}}>
                    <Icon name = {'caret-left'} size = {50} color = {'black'}/>
                    </Pressable>
                </Card>
            </View>

            <View style = {styles.body}>

            <View style = {styles.profile}>
            <Icon style = {styles.pic} name = {'user'} size = {130} color = {'black'}/>
            </View>

            <View style = {styles.details} key = {user}>
        <View style = {styles.items}>
          <Text style = {{color: 'black', fontSize: 20, fontWeight: 'bold' }}>Name:</Text>
          <Text style = {{padding: 20, color: 'black', fontSize: 20 }}> {user ? user.name : 'Register Yourself First!'}</Text>
        </View>
        <View style = {styles.items}>
        <Text style = {{color: 'black', fontSize: 20, fontWeight: 'bold' }}>Email:</Text>
          <Text style = {{ padding: 20, color: 'black', fontSize: 20 }}>{user ? user.email : 'Register Yourself First!'}</Text>
        </View>
        <View style = {styles.items}>
        <Text style = {{color: 'black', fontSize: 20, fontWeight: 'bold' }}>Mobile No.</Text>
          <Text style = {{padding: 20, color: 'black', fontSize: 20 }}>{user ? user.mobile : 'Register Yourself First!'}</Text>
        </View>
        <View style = {styles.items}>
        <Text style = {{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Location: </Text>
          <Text style = {{ padding: 20, color: 'black', fontSize: 20 }}>{user ? user.location : 'Register Yourself First!'}</Text>
        </View>
      </View>

            </View>
        </View>
    );
}

export default profile;

const styles = StyleSheet.create({
    homepage: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        paddingTop: Constants.statusBarHeight,
    },

    items: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        flex: 0.23,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      },

      details: {
        flex: 2.5,
        backgroundColor: 'white',
        width: '100%'
      },
    header: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 30,
        padding: 10,
    },

    profile: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center'
      },

      pic: {
        width: 130,
        height: 130,
        borderRadius: 100,
        marginLeft: 30,
      },

    backButton: {
        position: 'absolute',
        top: 5,
        height: '100%',
        width: '20%',
        padding: 10,
        justifyContent: 'center',
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