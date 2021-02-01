import React, {Component} from 'react';
import { Image,  StyleSheet, View, TouchableOpacity, Container,LogBox } from 'react-native';
import {Router, Scene} from 'react-native-router-flux'
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';

//Below two lines to fix the yellow warning message from screen temporally
//https://github.com/expo/fyi/blob/master/deprecated-globals.md
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();


class App extends Component {
  render(){
    return (
/*       <Container> */
        <Router>
            <Scene>
              <Scene key ="welcome" component={Welcome} hideNavBar={true} title="Welcome"/>
              <Scene key ="login" component={Login} title="Login"/>
              <Scene key ="signup" component={SignUp} title="SignUp"/>
              <Scene key ="mainpage" component={MainPage} title="MainPage"/>
            </Scene>
        </Router>
       )
    }
}
export default App;


