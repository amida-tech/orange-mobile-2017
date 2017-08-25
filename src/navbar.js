//imports
import React from 'react';
import { Text, AppRegistry, View, Button, StyleSheet, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import styles from './styles.js';
import Auth from './authView.js';

//Tab Navigation Classes and Consts
class MessagesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ tintColor}) => (
      <Image
        source={require('./icons/info.png')}
        style = {[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render() {
    return ( 
      <View style = {styles.container} >
        <Text style = {styles.text}>Here are your Messages</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
          title = "Chat with Lucy"
        />
      </View>
    )
  }
}

class RecordsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Records',
    tabBarIcon: ({ tintColor}) => (
      <Image
        source={require('./icons/NavLogo.png')}
        style = {[styles.icon, {tintColor: tintColor}]}
      />
    )
  }
  render () {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>Here are your Records</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
          title = "Chat with Lucy"
        />
      </View>
    )
  }
}

class TodayView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Today',
    tabBarIcon: ({ tintColor}) => (
      <Image
        source={require('./icons/home2.png')}
        style = {[styles.icon, {tintColor: tintColor}]}
      />
    ),
    headerRight: (
      <Button 
        title="Adam West"
        iconRight
        icon = {{}}
        onPress={() => navigation.navigate('Logs', {user: 'Lucy'})}
     />
    ),
  })
  render () {
    return (
          <Auth/>
    )
  }
}


//??? HOW DO I ADD A CONSTANT TO MAINSCREENNAVIGATOR
const MainScreenNavigator = TabNavigator({
    Today: { screen: TodayView},
    Messages: { screen: MessagesScreen},
    Records: { screen: RecordsScreen},
    
  },
  {
    tabBarOptions: {
      activeTintColor: '#1742ff'
    },
  });



export default MainScreenNavigator;

