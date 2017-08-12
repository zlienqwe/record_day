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

import store from 'react-native-simple-store';
import Guide from './views/guide';
import MainView from './views/mainView'
import SplashScreen from 'react-native-splash-screen'

export default class mainActvity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirst: true,
    }
  }

  componentDidMount() {
    store.get('isFirst').then((res) => {
      console.log(res)
      if(res == null){
        store.save('isFirst', false);
      }else {
        this.setState({isFirst: false});
      }
      SplashScreen.hide();
    })
  }


  render() {
    if (this.state.isFirst) {
      return (this.renderGuideView());
    }else {
      return (this.renderMainView());
    }
  }

   renderGuideView() {
     return (
       <Guide />
     );
   }
   renderMainView() {
     return (
       <MainView />
     );
   };
}
