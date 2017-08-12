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
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

let image1 = require('../assets/guide/one.png');
let image2 = require('../assets/guide/two.png');
let image3 = require('../assets/guide/three.png');

import Util from '../actions/utils';

export default class Guide extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        horizontal={true}>
        <Image source={image1} style={styles.backgroundImage} />
        <Image source={image2} style={styles.backgroundImage} />
        <Image source={image3} style={styles.backgroundImage} />
      </ScrollView>
    )
  }

  renderLoadingView() {
      return (
        <Loading></Loading>
      );
    }
 }

 var styles = StyleSheet.create({
   contentContainer: {
      width: Util.size.width*3,
      height: Util.size.height,
    },
    backgroundImage: {
      width: Util.size.width,
      height: Util.size.height,
    },
 });
