import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationBar } from 'app/common';
import { Colors } from 'app/constants';

const MovieListScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationBar navigationTitle="Discover" centerTitle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default MovieListScreen;
