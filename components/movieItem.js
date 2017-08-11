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
  Image
} from 'react-native';

export default class MovieItem extends Component {
  render() {
    return(
      <View style={styles.movieitem}>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{this.props.movie.title}</Text>
          <Text style={styles.year}>{this.props.movie.year}</Text>
        </View>
        <Image
          source={{uri: this.props.movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
      </View>
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
     fontWeight: 'bold'
   },
   year: {
     textAlign: 'left',
     fontSize: 12,
     paddingLeft: 10,
   },
   thumbnail: {
     width: 53,
     height: 81,
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
