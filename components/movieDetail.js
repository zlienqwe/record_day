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
import Loading from './loading'
import FitImage from 'react-native-fit-image';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class MovieDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.movieName}`,
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {
      movieDetail: {},
      loaded: false,
      param: '',
      autoplay: false,
      arrows: true,
      size: { width, height },
    }
  }

  componentDidMount() {
    console.log('go fetch');
    this.fetchData();
  }


  fetchData() {
    console.log('fetching');
    var param = this.props.navigation.state.params.movieID;

    console.log(param)
    var REQUEST_URL = 'http://v3.wufazhuce.com:8000/api/movie/detail/'+ param + '?channel=wdj&source=channel_movie&source_id=9240&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android';

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        console.log(responseData);
        this.setState({
          movieDetail: responseData.data,
          loaded: true,
        });
      });
  }


  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    console.log(this.state.movieDetail);
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <FitImage
          resizeMode="contain"
          source={{uri: this.state.movieDetail.detailcover}}
          style={styles.thumbnail}></FitImage>

          <Text>
            {this.state.movieDetail.officialstory}
          </Text>

          <Carousel
            style={this.state.size}
            autoplay={this.state.autoplay}
            pageInfo
            bullets={this.state.bullets}
            onAnimateNextPage={(p) => console.log(p)}>
              <Image
                style={this.state.size}
                source={{uri: this.state.movieDetail.photo[0]}}
                ></Image>
                <Image
                  style={this.state.size}
                  source={{uri: this.state.movieDetail.photo[1]}}
                  ></Image>
                  <Image
                    style={this.state.size}
                    source={{uri: this.state.movieDetail.photo[2]}}
                    ></Image>
                  </Carousel>
        </ScrollView>
    );
  }

  renderLoadingView() {
      return (
        <Loading></Loading>
      );
    }
 }

 var styles = StyleSheet.create({
   loading: {
     color: 'red',
   },
   contentContainer: {
      paddingVertical: 20
  },

 });
