import React, {Component} from 'react';
import { Image,  StyleSheet, View, Text,  TouchableOpacity, Container,LogBox, ActivityIndicatior } from 'react-native';
import {Router, Scene} from 'react-native-router-flux'
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';

//Below two lines to fix the yellow warning message from screen temporally
//https://github.com/expo/fyi/blob/master/deprecated-globals.md
// Ignore log notification by message
//LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
//LogBox.ignoreAllLogs();


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {

        return fetch (`https://reactnative.dev/movies.json`)
        //return fetch (`https://reactnat`)
            .then ( (response) => response.json() )
            .then ( (responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                })
            })

        .catch((error) => {
            console.log(error)
        });
    }

    render(){
        if(this.state.isLoading){

          return (
            <View styles={styles.container}>
{/*                 <Text> EEEEEEEEEEEEEEEEEEEEEEEE</Text> */}
                    <Text style={styles.loading_text}>...Loading...</Text>
 {/*                    <ActivityIndicatior size="large" color="#0000ff" /> */}
            </View>
            )  

        }else{ 

          let movies = this.state.dataSource.map((val, key) => {
              return <View key={key} style={styles.item}> <Text>{val.title}</Text></View>});
          return (
            <View styles={styles.container}>
    {/*             {movies} */}
                <Text> YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</Text>
            </View>
            )  
        }

}
}
export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#67ADEE',
      alignItems: 'center',
      justifyContent: 'center',
      margin:50,
      marginHorizontal:20,
      paddingVertical: 130
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:1,
        backgroundColor: '#eee',
    },
    loading_text : {
        color: 'blue'
    },
  
  });