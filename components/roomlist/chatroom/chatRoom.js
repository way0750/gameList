import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ListView,
  Image,
  ScrollView
} from 'react-native';


const chatRoom = React.createClass({
  getInitialState(){
    return {
      comments: this.props.entry.comments
    };
  },
  addNewCommnet(event){
    let newText = event.nativeEvent.text.trim();
    if (newText) {
      var comments = [event.nativeEvent.text].concat(this.state.comments);
      this.setState({comments: comments});
    }
    this.component.clear();
  },
  render() {
    return (
      <View
      style={styles.chatRoomContainer}
      >
        <Image
          style={styles.image}
          source={{uri: this.props.entry.image}}
        />
      <Text 
      style={styles.caption}
      onPress={ () => {
        this.props.navigator.pop();
      }}
      >
        {this.props.entry.caption}
      </Text>
      <ScrollView 
      thisIsWhereTheCommentsGo={true}
      style={styles.comments}
      >
        {this.state.comments.map( (comment, index)=> {
          return (
            <Text 
            key={index}
            style={styles.singleComment}
            > 
              {comment}
            </Text>);
        })}
      </ScrollView>
      <TextInput
      ref = {(component) => {this.component = component;}}
      onSubmitEditing={ (eventObj) => {this.addNewCommnet(eventObj);}}
      style={styles.userInput}
      />
      </View>
      );
  }
});


const styles = StyleSheet.create({
  chatRoomContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  userInput: {

    width: 414,
    height: 60,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'aqua'    
  },
  image: {
    // transform: [{scale: 2}],
    opacity: 0.7,
    width: 414,
    height: 200
  },
  entry: {
    lineHeight: 40,
    marginTop: 10,
    fontSize: 30,
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: 'aqua'    
  },
  comments: {
    height: 270,
    width: 380
  },
  singleComment: {
    marginTop: 10
  },
  caption: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    borderWidth: 6,
    fontSize: 15,
    width: 380,
    height: 100,
    lineHeight: 30,
    borderStyle: 'solid',
    borderColor: 'yellow'
  },
});


export default chatRoom;
