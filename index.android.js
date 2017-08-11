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

import MovieList from './components/movieList'
import MovieDetail from './components/movieDetail'

const record_day = StackNavigator({
  Main: {screen: MovieList},
  Profile: {screen: MovieDetail},
});

AppRegistry.registerComponent('record_day', () => record_day);
