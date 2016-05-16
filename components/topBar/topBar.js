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
        <Text>
        {'Back'}
        </Text>
        <Text >
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
  topBar: {
    marginTop: 20,
    padding: 10,
    width: 430,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'aqua'
  },
  entry: {
    lineHeight: 40,
    marginTop: 10,
    fontSize: 30,
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: 'aqua'    
  },
  image: {
    // transform: [{scale: 25}],
    width: 100,
    height: 100
  },
  listContainer: {
    marginBottom: 5,
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: 'yellow',
    marginTop: 50
  },
});


export default topBar;
