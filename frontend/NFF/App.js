import React, {Component} from 'react';
import { Image,  StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';

//const Stack = createStackNavigator();

class App extends Component {
  render(){
    return (
         <View>
          <Welcome/>
        </View> 
/*        <View styles={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>   
      </View>    */
       )
    }
}
export default App;


/* export default class App extends React.Component() {
  render(){
    return (
       <View styles={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>   
      </View>  
       )
    }
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
