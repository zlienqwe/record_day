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
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Loading from './loading';
import MovieItem from './movieItem'
//
var REQUEST_URL = 'http://v3.wufazhuce.com:8000/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android';

export default class MovieList extends Component {
  static navigationOptions = {
    title: '首页',
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loaded: false,
    }
  }
  _keyExtractor = (item, index) => {
    return item.id
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderMovie.bind(this)}
        keyExtractor={this._keyExtractor}
        style={styles.listView}
        extraData={this.state}
      />
    );
  }

   componentDidMount() {
     console.log('go fetch');
     this.fetchData();
   }

   fetchData() {
     console.log('fetching');
     fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
         // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
         console.log(responseData);
         this.setState({
           dataSource: responseData.data,
           loaded: true,
         });
       });
   }

   renderLoadingView() {
     return (
       <Loading></Loading>
     );
   }
   getMovieDetails(ID, name) {
     const { navigate } = this.props.navigation;
     navigate('Profile', {movieID: ID, movieName: name})
   };

   renderMovie(movie) {
     console.log(movie.item)
     return (
        <MovieItem movie={movie.item} onPressItem={(id: string, name: string) => this.getMovieDetails(id, name)}></MovieItem>
     );
   }
 }

 var styles = StyleSheet.create({
   listView: {
     flex: 1,
     backgroundColor: '#f4f4f4',
   },
   title: {
     fontSize: 14,
     marginBottom: 8,
     color: 'grey',
     textAlign: 'left',
     paddingLeft: 10,
     fontWeight: 'bold',
     marginTop: 8,
   },
   subtitle: {
     fontSize: 12,
     textAlign: 'left',
     paddingLeft: 10,
   },
   year: {
     textAlign: 'left',
     fontSize: 12,
     paddingLeft: 10,
   },
   thumbnail: {
     width: 100,
     height: 100,
     marginLeft: 20
   },
   rightContainer: {
     flex: 1,
   },
   movieitem: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     paddingLeft: 10,
     paddingTop: 3,
     paddingRight: 10,
     paddingBottom: 3,
     paddingLeft: 10,
     marginBottom: 2,
     backgroundColor: '#fff'
   }
 });
