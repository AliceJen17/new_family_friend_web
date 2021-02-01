import React , {Component}from 'react';
import { 
    TextInput, 
    Text, 
    View, 
    AsyncStorage,
    KeyboardAvoidingView
 } from 'react-native';
import { Button,} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/styles.js';
import {API_URL, TOKEN_KEY} from "../constant";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }


    async loginHandler(){
        return fetch(`${API_URL}/user/login`,{
            method: 'POST',
/*             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, */
/*             body: JSON.stringify({
                email : this.state.email,
                password : this.state.password,
            }), */
        })
            .then((response) => {
                console.log(response.status);
                if (response.status == "200") {
                    return response.headers;
                } else {
                    Toast.show({
                        text: "Invalid Username or Password",
                        textStyle: {fontSize: 13},
                        buttonText: "Got it!",
                        duration: 3000,
                        position: "top"
                    })
                    return null;
                }
            })
            .then((headers) => {
                if(headers) {
                    console.log('Success:', headers);
                    let accessToken = headers.get('authorization').toString();
                    console.log(accessToken);
                    //this._onValueChange(accessToken);
                    return true;
                }else{
                    return false;
                }
            }).then((status)=>{
                if(status) {
                    //Actions.home({page:"mealplan"});
                    Actions.mainpage();
                }
                return status;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
 
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
                    <Text style={{ fontSize:18, marginTop : 20, color: '#0026ca' }}>Frogot password ? </Text> 
                    <Button style={[styles.primaryButton, {width: 340}, {marginTop : 12}]}
                            onPress={()=>Actions.mainpage()
                            //onPress={ this.loginHandler.bind(this)
                            }>
                        <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}
                        >Login</Text> 
                    </Button>

                    <Text style={{textAlign:'center', fontSize:18, color: '#0026ca' }}>Don't have an account yet ? </Text> 
                    
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