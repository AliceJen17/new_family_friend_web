import React , {Component}from 'react';
import { Image,  StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux'

class Welcome extends Component {
    render(){
        return (
            <View styles={styles.container}>
               <Image  
               style={{ width:"100%", height:500}} 
               source={require('../assets/background.png')}
               resizeMode="contain" 
               /> 
               <Text style={{ fontSize:40, color:'#4C5355', fontWeight: 'bold', textAlign:'center'}}>Hello!</Text>
               <Text style={{ fontSize:16, color:'#4C5355', textAlign:'center', marginHorizontal:20}}
               >Welcome to our New Family and Friend app.  Have fun!</Text>
       
               <View style={ { flexDirection: 'row', margin: 20, paddingVertical: 15}}>
                 <TouchableOpacity
                   onPress={()=>Actions.login()}
                   style={ {backgroundColor: '#67ADEE', padding: 10, width: 150, borderRadius: 30,
                   marginHorizontal: 15}}
                 >
                   <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}>Login</Text>  
                 </TouchableOpacity>
                 
                 <TouchableOpacity
                   onPress={()=>Actions.signup()}
                   style={ {backgroundColor: '#67ADEE', padding: 10, width: 150, borderRadius: 30,
                   marginHorizontal: 10}}
                 >
                   <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}>Sign Up</Text>  
                 </TouchableOpacity>
               </View>
            </View> 
         )
    } 
}
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
