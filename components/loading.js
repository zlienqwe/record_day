/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Spinner from 'react-native-spinkit'

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 4,
      types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
      size: 60,
      color: "#5fb7c1",
      isVisible: true
    }
  }
  render() {
    var type = this.state.types[this.state.index];
    return(
      <View style={styles.container}>
      <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={type} color={this.state.color}/>
      </View>
    )
  }
 }

 var styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     paddingTop: 100
   },
 });
