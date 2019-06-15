/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Colors } from './constants';
import MoviesAppContainer from './routes/moviesNavigatorSetup';

export default class App extends Component<{}> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={{ flex: 1 }}>
          <MoviesAppContainer />
        </View>
      </SafeAreaView>
    );
  }
}
