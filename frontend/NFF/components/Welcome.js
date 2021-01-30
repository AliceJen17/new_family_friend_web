import React , {Component}from 'react';
import { Image,  StyleSheet, Text, View, TouchableOpacity } from 'react-native';
class Welcome extends Component {
    render(){
/*         this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false,
        }) */  
        return (
            <View styles={styles.container}>
               <Image  
               style={{ width:"100%", height:500}} 
               source={require('../assets/background.png')}
               resizeMode="contain" 
               /> 
               <Text style={{ fontSize:40, color:'#4C5355', foutWeight: 'bold', textAlign:'center'}}>Hello!</Text>
               <Text style={{ fontSize:16, color:'#4C5355', textAlign:'center', marginHorizontal:20}}
               >Welcome to our New Family and Friend app.  Have fun!</Text>
       
               <View style={ { flexDirection: 'row', margin: 20, paddingVertical: 30}}>
                 <TouchableOpacity
                    //onPress={ () => this.props.navigation.navigate('Login')}
                   style={ {backgroundColor: '#67ADEE', padding: 10, width: 150, borderRadius: 30,
                   marginHorizontal: 15}}
                 >
                   <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}>Login</Text>  
                 </TouchableOpacity>
                 
                 <TouchableOpacity
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
/* export default class Welcome extends Component() {
    render(){

        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown: false,
        })

        return (
            <View styles={styles.container}>
               <Image  
               style={{ width:"100%", height:500}} 
               source={require('../assets/background.png')}
               resizeMode="contain" 
               /> 
               <Text style={{ fontSize:40, foutWeight: 'bold', textAlign:'center'}}>Hello!</Text>
               <Text style={{ fontSize:16, color:'#4C5355', textAlign:'center', marginHorizontal:20}}
               >Welcome to our New Family and Friend app.  Have fun!</Text>
       
               <View style={ { flexDirection: 'row', margin: 20, paddingVertical: 30}}>
                 <TouchableOpacity
                   style={ {backgroundColor: '#67ADEE', padding: 10, width: 150, borderRadius: 30,
                   marginHorizontal: 15}}
                 >
                   <Text style={{textAlign:'center', fontSize:18, color: '#fff' }}>Login</Text>  
                 </TouchableOpacity>
                 
                 <TouchableOpacity
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
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
