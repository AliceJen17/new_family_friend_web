import React , {Component}from 'react';
import { 
    TextInput, 
    Text, 
    View, 
    AsyncStorage,
    KeyboardAvoidingView,
    //Toast,
 } from 'react-native';
import { Button,} from 'native-base';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/styles.js';
import {API_URL, TOKEN_KEY} from "../constant";
import Toast from 'react-native-toast-message'
import { isIphoneX } from 'react-native-iphone-x-helper'

export default class Login extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

/*     componentDidMount(){
        this._loadInitialState().done();

    }

    _loadInitialState = async () => {


    } */


    login = () => {
        console.log("email is : " + this.state.email);
        console.log("password is : " +this.state.password);
       //if(!this.state.email == null && !this.state.password == null){
            return fetch(`http://100.20.18.178/user/login`,{
            //return fetch(`${API_URL}/user/login`,{
                method: 'POST',
/*                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },   */
                body: JSON.stringify({               
                    "email":this.state.email,
                    "password":this.state.password
                }), 
            })
            //.then( (res) => res.json())
            .then( (response) => {
                console.log("response Status is:" + response.status);
                console.log("response  is :" + JSON.stringify(response));
                if(response.status == "200"){
                    Actions.mainpage();
                }
                else{
                    console.log('No such user or password!!!   ');
                    Toast.show({
                        text: "Invalid Username or Password",
                        textStyle: {fontSize: 13},
                        buttonText: "Got it!",
                        duration: 3000,
                        position: "top"
                    }) 
                }
            })
            .catch((error) => {
                console.error('Error', error);
            })
            .done();
       // }   
    }


 
    render(){
        return (
                <View style={[styles.container]}>
                    <Text style={ [styles.primaryText, { marginTop: 30 }]}>Welcome Back to NFF!</Text>

                    <TextInput 
                    style={styles.inputBox}
                    onChangeText={ (email) => this.setState({email})}
                    //value = {this.state.email}
                    placeholder="Email"
                    placeholderTextColor = 'ddd'
                    keyboardType = 'email-address'
                    autoCompleteType = 'email'
                    autoCapitalize = 'none'
                    /> 
                    <TextInput 
                    style={styles.inputBox}
                    onChangeText={ (password) => this.setState({password})}
                    //value = {this.state.password}
                    placeholder="Password"
                    placeholderTextColor = 'ddd'
                    //keyboardType = 'number-pad'
                    autoCompleteType  = 'password'
                    autoCapitalize = 'none'
                    //secureTextEntry={true}
                    /> 
                    <Text style={{ fontSize:18, marginTop : 20, color: '#0026ca' }}>Forgot password? </Text> 
                    <Button style={[styles.primaryButton, {width: 340}, {marginTop : 12}]}
                            onPress={this.login}
                            //onPress={()=>Actions.mainpage()}
                            //onPress={ this.loginHandler.bind(this)}
                            >
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

//export default Login;

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