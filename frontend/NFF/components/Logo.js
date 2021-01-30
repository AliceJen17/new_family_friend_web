import React from 'react';
import { 
    Image,  
    StyleSheet, 
    Text, 
    View, 
 } from 'react-native';
import logo from '../assets/NFF_logo.jpg'; 

function Logo(props) {
    return (
        <View style={styles.container}>
            <Image  style={styles.logo} source={logo} /> 
            <Text style={styles.logoText}>Welcome to our app.</Text>
        </View> 
    );
}

export default Logo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      logo:{
          marginVertical: 30,
          width:305,
          height:159,
      },
      logoText: {
        fontSize:18,
        color: '#888'
      },   
})