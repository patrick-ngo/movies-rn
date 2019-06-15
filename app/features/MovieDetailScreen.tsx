import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationBar } from 'app/common';
import { Colors } from 'app/constants';
import { NavigationScreenProp } from 'react-navigation';
import { Movie } from 'app/models/models';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const MovieDetailScreen: React.FC<Props> = (props: Props) => {
  const movie: Movie = props.navigation.getParam('movie', undefined);
  const { title = '' } = movie;

  return (
    <View style={styles.container}>
      <NavigationBar navigationTitle={title} centerTitle showBackButton />
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
