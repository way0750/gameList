import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Image,
  ScrollView
} from 'react-native';

const topBar = React.createClass({
  render(){
    return (
      <View style={styles.topBar}>
        <Text style={styles.chatRoom}>
        {'Back'}
        </Text>
        <Text 
        style={styles.chatRoom}>
        {this.props.chatRoom}
        </Text>
        <Text>
        {'\t'}
        </Text>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  chatRoom: {
    fontSize: 20,
    opacity: 0.9,
    fontFamily: 'MarkerFelt-Wide'
  },
  topBar: {
    marginTop: 10,
    padding: 10,
    width: 430,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2cbaba'
  }
});


export default topBar;
