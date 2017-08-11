/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class Loading extends Component {
  render() {
    return(
      <Text style={styles.loading}>
        加载中...
      </Text>
    )
  }
 }

 var styles = StyleSheet.create({
   loading: {
     color: 'red'
   }
 });
