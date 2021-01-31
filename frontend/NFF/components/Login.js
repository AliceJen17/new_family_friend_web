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

class Login extends Component{
    render(){
        return (
                <View style={[styles.container]}>
                    <Text style={ [styles.primaryText, { marginTop: 30 }]}>Welcome Back to NFF!</Text>

                    <TextInput 
                    style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor = 'ddd'
                    keyboardType = 'email-address'
                    /> 
                    <TextInput 
                    style={styles.inputBox}
                    placeholder="Password"
                    placeholderTextColor = 'ddd'
                    keyboardType = 'visible-password'
                    /> 
                    
                    <Button style={[styles.primaryButton, {width: 340}, {marginTop : 60}]}>
                        <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}
                        >Login</Text> 
                    </Button>
                    <Text style={{textAlign:'center', fontSize:18, color: '#0026ca' }}>Don't have an account yet? </Text> 
                    <Button onPress={()=>Actions.signup()} style={[styles.primaryButton, {width: 340}]}>
                        <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}
                        >Sign up</Text> 
                    </Button>

                </View> 
        ) 
    }
}

export default Login;

/* const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
      padding: 20,
      //marginHorizontal:20
      //paddingVertical: 130
    },
    inputBox:{
        //keyboardType: 'email-address',
        width: 300,
        height: 50,
        marginTop : 60,
        //backgroundColor:'#67ADEE',
        borderBottomColor:'#ddd',
        borderBottomWidth: 1,
        paddingBottom: 10,
        fontSize:16,
        color:'#ddd',
    },
  }); */