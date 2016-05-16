/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ListView,
  Navigator
} from 'react-native';

import RoomList from './components/roomlist/roomListComp.js';
import gameData from './data/games.js';
const game = React.createClass({
  getInitialState(){
    return {gameData: gameData};
  },

  componentWillMount() {
  },

  renderScene(route, navigator){
    if (route.route === 'mainList'){
      return <route.component navigator={navigator} gameData={this.state.gameData}/>;
    } else if (route.route === 'chatRoom') {
      return <route.component navigator={navigator} entry={route.entry}/>;
    } else {
      return <route.component navigator={navigator} />;
    }
  },

  render() {
    return (<Navigator
      initialRoute={{route: 'mainList', component: RoomList}}
      renderScene={this.renderScene}
      />);
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth: 6,
    height: 40,
    borderStyle: 'solid',
    borderColor: 'blue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    borderWidth: 6,
    fontSize: 15,
    lineHeight: 30,
    borderStyle: 'solid',
    borderColor: 'yellow',
    marginTop: 50
  },
});

AppRegistry.registerComponent('game', () => game);
