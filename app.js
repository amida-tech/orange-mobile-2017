// Index.ios.js - place code in here for iOS

//imports
import React from 'react';
import {
  Text,
  AppRegistry,
  View,
  Button,
  StyleSheet,
  Image,
  Picker,
} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation';

import MainScreenNavigator from './src/navbar.js';
import styles from './src/styles.js';



//Stack Navibation Classes and Consts
class LogScreen extends React.Component {
  static navigationOptions = {
    headerTintColor: 'black',
  };
  render () {
    //??? WHAT DOES IT MEAN WHEN YOU PUT YOUR CONST INSIDE {}
    const { navigate } =this.props.navigation;
    console.log(navigate);
    return (
      <View style = {styles.logContainer}>
        <Text style = {styles.logText}>Logs</Text>
      </View>
    );
  }
}


//TODO figure out how to get isInfo inside the render block
class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    const isInfo  = state.params.mode === 'info';
    const {user} = state.params;
    return{
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${navigation.state.params.user}`,
      headerRight: (
        <Button 
          title= {isInfo ? 'Done' : `${user}'s info`}
          onPress = {() => setParams({ mode: isInfo ? 'none' : 'info'})}
          />
      ),
    };
  };
  render () {
    const { params } = this.props.navigation.state;
    //console.log(params.isInfo);
    return (
      <View> 
        <Text>{params.isInfo}</Text>
        <Text>{params.isInfo ? `${params.user}'s info` : `Chat with ${params.user}!`}</Text>
      </View>
    )
    
  }
  
}

//Our react component
const App = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: {screen: ChatScreen},
    Logs: {screen: LogScreen},
    
  },
  {
      mode: 'modal',
  });


//Render to our device

AppRegistry.registerComponent('albums', () => App);
