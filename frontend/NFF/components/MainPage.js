import React , {Component}from 'react';
import { 
    TextInput, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
 } from 'react-native';
import { Button,} from 'native-base';
import {Actions} from 'react-native-router-flux'
import styles from '../styles/styles.js';

class MainPage extends Component{
    render(){
        return (
                <View style={[styles.container]}>
                    <Text style={ [styles.primaryText, { marginTop: 30 }]}>Main Page!!!!!</Text>

                </View> 
        ) 
    }
}

export default MainPage;