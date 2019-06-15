import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationBar } from 'app/common';
import { Colors } from 'app/constants';

const MovieDetailScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationBar navigationTitle="Movie Detail" centerTitle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default MovieDetailScreen;
