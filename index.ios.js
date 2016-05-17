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
      style={styles.main}
      initialRoute={{route: 'mainList', component: RoomList}}
      renderScene={this.renderScene}
      />);
  }
});

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#55d6d7'
  }
});

AppRegistry.registerComponent('game', () => game);
