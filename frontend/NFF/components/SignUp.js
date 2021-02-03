import React , {Component}from 'react';
import { 
    TextInput, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity
 } from 'react-native';

import { Button,} from 'native-base';
import styles from '../styles/styles.js';
import {Actions} from 'react-native-router-flux';


class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: " ",
        }
    }



    render(){
        return (
                <View style={[styles.container]}>
                    <Text style={ [styles.primaryText, { marginTop: 30 }]}>Sign Up---Step1 </Text>

                    <TextInput 
                    style={[styles.inputBox]}
                    placeholder="Email"
                    placeholderTextColor = 'ddd'
                    keyboardType = 'email-address'
                    autoCapitalize = 'none'
                    /> 
                    <TextInput 
                    style={[styles.inputBox]}
                    placeholder="Password"
                    placeholderTextColor = 'ddd'
                    keyboardType = 'visible-password'
                    autoCapitalize = 'none'
                    secureTextEntry={true}
                    /> 
                    <TextInput 
                    style={[styles.inputBox]}
                    placeholder="Confirm Password "
                    placeholderTextColor = 'ddd'
                    keyboardType = 'visible-password'
                    autoCapitalize = 'none'
                    secureTextEntry={true}
                    /> 
                    <Button 
                        style={[styles.primaryButton, {width: 340}, {marginTop : 60}]}
                        onPress={()=>Actions.mainpage()}
                        >
                        <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}
                        >Next</Text> 
                    </Button>
                </View> 
        ) 
    }
}

export default SignUp;

