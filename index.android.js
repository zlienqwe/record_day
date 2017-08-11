/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

import Loading from './components/loading';
import MovieItem from './components/movieItem'

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class record_day extends Component {
   constructor(props) {
     super(props);
     this.state = {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
       loaded: false,
     };
     // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
     // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
     this.fetchData = this.fetchData.bind(this);
   }

   componentDidMount() {
     this.fetchData();
   }

   fetchData() {
     fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
         // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
         this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
           loaded: true,
         });
       });
   }

   render() {
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     return (
       <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderMovie}
         style={styles.listView}
       />
     );
   }

   renderLoadingView() {
     return (
       <Loading></Loading>
     );
   }

   renderMovie(movie) {
     return (
        <MovieItem movie={movie}></MovieItem>
     );
   }
 }

 var styles = StyleSheet.create({
   listView: {
     paddingTop: 20,
     backgroundColor: '#f4f4f4',
   },
 });

 AppRegistry.registerComponent('record_day', () => record_day);
