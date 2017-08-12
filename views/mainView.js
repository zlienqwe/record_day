/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import MovieList from './movieList'
import MovieDetail from './movieDetail'

const MianView = StackNavigator({
  Main: {screen: MovieList},
  Profile: {screen: MovieDetail},
});

export default MianView;
