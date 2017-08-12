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
  TouchableOpacity,
  navigator,
} from 'react-native';

import movieDetail from '../views/movieDetail'

export default class MovieItem extends Component {
  chooseMovie (){
    console.log(this.props.movie.item_id)
    this.props.onPressItem(this.props.movie.item_id, this.props.movie.subtitle);
  }
  render() {
    return(
      <TouchableOpacity style={styles.movieitem} onPress={()=>this.chooseMovie()}>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.props.movie.subtitle}</Text>
          <Text style={styles.subtitle} ellipsizeMode='tail' numberOfLines={1}>{this.props.movie.title}</Text>
          <Text style={styles.year}>{this.props.movie.year}</Text>
        </View>
        <Image
          source={{uri: this.props.movie.img_url}}
          style={styles.thumbnail}
        />
      </TouchableOpacity>
    )
  }
 }

 var styles = StyleSheet.create({
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
