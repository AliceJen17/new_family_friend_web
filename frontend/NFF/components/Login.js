import React , {Component}from 'react';
import { 
    TextInput, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity
 } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
class Login extends Component{
    render(){
        return (
                <View style={styles.container}>
                    <Text style={ {fontSize: 25, color:'#4C5355', marginTop: 50 }}>Welcome Back to NFF!</Text>

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

                    <View style={ { flexDirection: 'row', margin: 20, paddingVertical: 50}}>
                        <TouchableOpacity
                            //onPress={ () => this.props.navigation.navigate('Login')}
                        style={ {backgroundColor: '#67ADEE', padding: 10, width: 275, height: 45,  borderRadius: 30,
                        marginHorizontal: 15}}
                        >
                        <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}>Login</Text>  
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center',}}>
                        <Text style={{textAlign:'center', fontSize:18, color: '#0026ca' }}>Don't have an account yet? </Text>  
                        <TouchableOpacity
                            //onPress={ () => this.props.navigation.navigate('Login')}
                        style={ {backgroundColor: '#67ADEE', padding: 10, width: 150, height: 45,  borderRadius: 30,
                        marginHorizontal: 15 ,marginTop: 15}}
                        >
                        <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}>Signup</Text>  
                        </TouchableOpacity>
                    </View>
                </View> 
        ) 
    }
}

export default Login;

const styles = StyleSheet.create({
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
  });