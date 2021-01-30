import React , {Component}from 'react';
import { 
    TextInput, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity
 } from 'react-native';

class SignUp extends Component{
    render(){
        return (
                <View style={styles.container}>
                    <Text style={ {fontSize: 25, color:'#4C5355', marginTop: 50 }}>SignUp--Step1 !</Text>

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
                    <TextInput 
                    style={styles.inputBox}
                    placeholder="Confirm Password "
                    placeholderTextColor = 'ddd'
                    keyboardType = 'visible-password'
                    /> 

                    <View style={ { flexDirection: 'row', margin: 20, paddingVertical: 50}}>
                        <TouchableOpacity
                        style={ {backgroundColor: '#67ADEE', padding: 10, width: 275, height: 45,  borderRadius: 30,
                        marginHorizontal: 15}}
                        >
                            <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}>Next</Text>  
                        </TouchableOpacity>
                        
                    </View>


                </View> 
        ) 
    }
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
      padding: 20,
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