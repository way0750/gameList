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
  ScrollView,
  TouchableOpacity
} from 'react-native';

import TopBar from '../../topBar/topBar.js';

const chatRoom = React.createClass({
  getInitialState(){
    return {
      comments: this.props.entry.comments,
      editing: false
    };
  },
  addNewCommnet(event){
    let newText = event.nativeEvent.text.trim();
    if (newText) {
      var comments = [event.nativeEvent.text].concat(this.state.comments);
      this.setState({comments: comments});
    }
    this.inputComponent.clear();
    this.commentCompoent.scrollTo({y: 0, animated: false});
  },
  makeDynStyle(){
    return {
      alignItems: 'center',
      marginTop: this.state.editing ? -300 : 10
    };
  },
  render() {
    let containerStyle = this.makeDynStyle();
    return (
      <View
        style={containerStyle} >

      <TouchableOpacity 
        onPress = {() => {
          this.props.navigator.pop();
        }}>
        <TopBar 
          chatRoom = {this.props.entry.name}
          toNavigate = { () => {
            this.props.navigator.pop();
          }} />
      </TouchableOpacity>

      <Image
        style={styles.image}
        source={{uri: this.props.entry.image}} />
      <ScrollView
      style={styles.captionContainer} >
        <Text>
        {this.props.entry.caption}
        </Text>
      </ScrollView>

      <ScrollView
        ref={(scrollView) => { this.commentCompoent = scrollView;}} 
        style={styles.comments} >
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
        ref = {(component) => {this.inputComponent = component;}}
        onSubmitEditing={ (eventObj) => {this.addNewCommnet(eventObj);}}
        style={styles.userInput} 
        onBlur = {() => {
          this.setState({editing: false});
        }}
        onFocus = {() => {
          this.setState({editing: true});
        }}  />
      </View>
      );
  }
});


const styles = StyleSheet.create({
  chatRoomContainer: {
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
    marginTop: 0,
    opacity: 1,
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
    height: 320,
    width: 380
  },
  singleComment: {
    marginTop: 15,
    marginBottom: 15,
  },
  captionContainer: {
    backgroundColor: '#33FFCC',
    marginBottom: 5,
    width: 415,
    height: 100,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    borderColor: '#33FFCC'
  },
});


export default chatRoom;
