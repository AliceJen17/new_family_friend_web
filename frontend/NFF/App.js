import React, {Component} from 'react';
import { Image,  StyleSheet, View, TouchableOpacity, Container } from 'react-native';
import {Router, Scene} from 'react-native-router-flux'
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render(){
    return (
/*       <Container> */
        <Router>
            <Scene>
              <Scene key ="welcome" component={Welcome} title="Welcome"/>
              <Scene key ="login" component={Login} title="Login"/>
              <Scene key ="signup" component={SignUp} title="SignUp"/>

            </Scene>
        </Router>
       )
    }
}
export default App;

