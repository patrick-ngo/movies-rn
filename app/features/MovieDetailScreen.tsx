import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { NavigationBar } from 'app/common';
import { Colors } from 'app/constants';
import { NavigationScreenProp, ScrollView } from 'react-navigation';
import { Movie } from 'app/models/models';
import { fetchMovieDetailAPI, BASE_URL_IMAGES_HIGH } from 'app/api';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const MovieDetailScreen: React.FC<Props> = (props: Props) => {
  const [movie, setMovie] = useState<Movie>({});

  const movieId: number = props.navigation.getParam('movieId', undefined);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const movieResponse: Movie = await fetchMovieDetailAPI(movieId);
    setMovie(movieResponse);
  };

  const {
    title = '',
    poster_path = '',
    genres = [],
    overview = '',
    original_language = '',
    runtime = '',
  } = movie;
  const imageUrl = `${BASE_URL_IMAGES_HIGH}${poster_path}`;
  const genreString = genres.map(genre => genre.name).join(' • ');

  return (
    <View style={styles.container}>
      <NavigationBar navigationTitle={title} centerTitle showBackButton />

      <ScrollView style={{ flex: 1, paddingBottom: 20 }}>
        {/* Poster */}
        <View style={styles.posterContainer}>
          <Image
            style={styles.posterImage}
            resizeMode="cover"
            source={{ uri: imageUrl }}
          />
        </View>

        <View style={styles.detailsContainer}>
          {/* Movie title */}
          <Text style={styles.titleText}>{title}</Text>
          {/* Genres */}
          <Text style={styles.genreText}>{genreString}</Text>
          {/* Overview */}
          <Text style={styles.overviewText}>{overview}</Text>
          {/* Language */}
          {!!original_language && (
            <Text
              style={styles.genreText}
            >{`Language: ${original_language}`}</Text>
          )}
          {/* Runtime */}
          {!!runtime && (
            <Text style={styles.genreText}>{`Runtime: ${runtime}m`}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  posterContainer: {
    left: 0,
    right: 0,
    height: 350,
  },
  detailsContainer: {
    paddingBottom: 20,
  },
  posterImage: {
    flex: 1,
    borderColor: Colors.greyBorder,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 13,
    color: Colors.black,
    paddingHorizontal: 15,
    letterSpacing: 1.2,
    paddingTop: 16,
    paddingBottom: 4,
  },
  genreText: {
    fontSize: 11,
    color: Colors.greyDark,
    paddingHorizontal: 15,
    paddingBottom: 4,
  },
  overviewText: {
    fontSize: 13,
    color: Colors.black,
    paddingHorizontal: 15,
    paddingBottom: 16,
  },
});

export default MovieDetailScreen;
