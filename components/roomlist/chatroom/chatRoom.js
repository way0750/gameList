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
  TouchableOpacity,
  StatusBar
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
     <StatusBar
       hidden = {true}
      />
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
        <Text style={styles.captionText}>
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
        placeholder = "-->> your 2 cents !"
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
    marginTop: -5,
    width: 414,
    height: 60,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderStyle: 'solid',
    borderColor: '#33FFCC',
    backgroundColor: '#98e7e7',
    fontSize: 18,
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
    borderColor: '#00cc00'    
  },
  comments: {
    height: 320,
    width: 415,
    backgroundColor: '#229191',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    borderColor: '#229191'
  },
  singleComment: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#135353',
    color: '#d6f5f5',
    padding: 5,
    fontSize: 18,
  },
  captionContainer: {
    backgroundColor: '#83e2e2',
    width: 415,
    height: 100,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    borderColor: '#83e2e2'
  },
  captionText: {
    fontSize: 18,
    color: '#0a2929'
  }
});


export default chatRoom;
