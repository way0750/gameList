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

import ChatRoom from './chatroom/chatRoom.js';

const RoomList = React.createClass({
  getInitialState(){
    let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
          
    return {
      dataSource: dataSource
    };
  },
  render() {
    var smallImage = {uri: './BoomBeach_thumb.png', isStatic: true};
    return (
      <ListView
      style={styles.listContainer}
      dataSource = {this.state.dataSource.cloneWithRows(this.props.gameData)}
      renderRow = { (entry) => {
        return (
          <View
          >
          <Image
            style={styles.image}
            source={{uri: entry.thumbnail}}
          />

          <Text 
          style={styles.entry}
          onPress={ () => {
            this.props.navigator.push({route: 'chatRoom', component: ChatRoom, entry: entry});
          }}
          > 
          {entry.name}
          </Text>
          </View>

          );
      }}
      >
      </ListView>
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


export default RoomList;
