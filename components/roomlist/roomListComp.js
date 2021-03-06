import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import ChatRoom from './chatroom/chatRoom.js';
import TopBar from '../topBar/topBar.js';
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
          <TouchableOpacity
              onPress={ () => {
                this.props.navigator.push({route: 'chatRoom', component: ChatRoom, entry: entry});
              }}>
          <View 
          style = {styles.entry}
          >
          <StatusBar 
            hidden = {true} />
            <Image
              style={styles.image}
              source={{uri: entry.thumbnail}}
            />

            <Text 
            style={styles.name}
            > 
            {entry.name}
            </Text>
            <Text
            style = {styles.entryArrow}
            >
              ▶
            </Text>
          </View>
          </TouchableOpacity>
          );
      }}
      />
      );
  }
});
// '▷►➳ ➽▶▶ ▷►'

const styles = StyleSheet.create({
  entryArrow: {
    width: 50,
    fontSize: 30,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  entry: {
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: '#adebeb',    
    padding: 20,
    backgroundColor: '#5cd6d6',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    width: 200,
    fontSize: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    fontFamily: 'MarkerFelt-Wide',
    opacity: 0.9
  },
  image: {
    width: 100,
    height: 100
  },
  listContainer: {
    marginTop: 20,
  },
});


export default RoomList;
