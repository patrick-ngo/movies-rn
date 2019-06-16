import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import { Colors, Genres } from 'app/constants';
import { Movie } from 'app/models/models';
import { BASE_URL_IMAGES_LOW } from 'app/api';

interface Props {
  item?: Movie;
  index?: number;
  onPressItem?: (id?: number, item?: Movie) => void;
}

const MovieListCell = (props: Props) => {
  const { item, index, onPressItem } = props;
  const { title = '', poster_path = '', genre_ids = [] } = item || {};

  const imageUrl = `${BASE_URL_IMAGES_LOW}${poster_path}`;
  const genres = genre_ids.map(genreId => Genres[genreId]).join(' • ');

  const renderImage = () => {
    if (poster_path) {
      return (
        <View style={styles.posterContainer}>
          <Image
            style={styles.posterImage}
            resizeMode="cover"
            source={{ uri: imageUrl }}
          />
        </View>
      );
    }
    return <View style={styles.posterContainer} />;
  };

  const onPress = () => {
    if (onPressItem) {
      onPressItem(index, item);
    }
  };

  return (
    <TouchableHighlight onPress={onPress} underlayColor={Colors.blueUnderlay}>
      <View style={styles.container}>
        {/* Poster */}
        {renderImage()}
        <View>
          {/* Movie title */}
          <Text style={styles.titleText}>{title}</Text>
          {/* Genres */}
          <Text style={styles.genreText}>{genres}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

MovieListCell.defaultProps = {
  item: null,
  index: 0,
  onPressItem: undefined,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    height: 70,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 13,
    color: Colors.black,
    paddingHorizontal: 10,
    letterSpacing: 1.2,
  },
  genreText: {
    fontSize: 11,
    color: Colors.greyDark,
    paddingLeft: 10,
  },
  posterContainer: {
    width: 50,
    height: 50,
  },
  posterImage: {
    borderRadius: 4,
    flex: 1,
    borderColor: Colors.greyBorder,
    borderWidth: 1,
  },
});

export default MovieListCell;
