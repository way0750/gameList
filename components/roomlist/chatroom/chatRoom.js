import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ListView,
  Image
} from 'react-native';


const chatRoom = React.createClass({
  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />
      <Text 
      style={styles.instructions}
      onPress={ () => {
        this.props.navigator.pop();
      }}
      >
        this is going to be the chat room{'\n'}
        {this.props.entry.name}
      </Text>
      </View>
      );
  }
});


const styles = StyleSheet.create({
  entry: {
    lineHeight: 40,
    marginTop: 10,
    fontSize: 30,
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: 'aqua'    
  },
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


export default chatRoom;
