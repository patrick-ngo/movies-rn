import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import _ from 'lodash';
import { NavigationBar, Spinner } from 'app/common';
import { Colors, Routes } from 'app/constants';
import { fetchMovieListAPI } from 'app/api';
import { MovieList, Movie } from 'app/models/models';
import MovieListCell from 'app/features/views/MovieListCell';

let onEndReachedCalledDuringMomentum = false;

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const MovieListScreen: React.FC<Props> = (props: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetchMovies();
  }, [page, refreshing]);

  const fetchMovies = async () => {
    setLoading(true);

    const moviesResponse: MovieList = await fetchMovieListAPI(page);
    const newMovies = moviesResponse.results || [];
    const newNumberOfPages = moviesResponse.total_pages || 0;

    setMovies([...movies, ...newMovies]);
    setNumberOfPages(newNumberOfPages);
    setLoading(false);
    if (refreshing) {
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    // Refresh list
    setRefreshing(true);
    setMovies([]);
    setPage(1);
  };

  const loadMore = () => {
    // If last page already reached, no need to load more
    if (refreshing || page >= numberOfPages) {
      return;
    }
    // Increment page
    const newPage = page + 1;
    setPage(newPage);
    onEndReachedCalledDuringMomentum = true;
  };

  const onPressMovie = (__?: number, movie?: Movie) => {
    if (props.navigation && movie) {
      props.navigation.navigate({
        routeName: Routes.Root.movieDetail,
        params: { movieId: movie.id },
      });
    }
  };

  const debounceLoadMore = _.debounce(loadMore, 300, { leading: true });

  const handleLoadMore = () => {
    // Combination of 'onEndReachedCalledDuringMomentum' and debounce as workaround
    // for FlatList onEndReached issues.
    // See: https://github.com/facebook/react-native/issues/14015#issuecomment-389585034
    if (!onEndReachedCalledDuringMomentum) {
      debounceLoadMore();
    }
  };

  const renderSeparator = () => <View style={styles.seperator} />;

  const renderItem = ({ item, index }: ListRenderItemInfo<Movie>) => (
    <MovieListCell item={item} index={index} onPressItem={onPressMovie} />
  );

  const renderFooter = () => {
    // Loading cell
    if (loading) {
      return (
        <View style={styles.loadingCell}>
          <Spinner size="small" />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* Nav bar */}
      <NavigationBar navigationTitle="Discover" centerTitle />

      {/* List of movies */}
      <FlatList
        data={movies}
        keyExtractor={(__: Movie, index: number) => String(index)}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter()}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        contentContainerStyle={{ paddingBottom: 35 }}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        getItemLayout={(__: any, index: number) => ({
          length: 70,
          offset: 70 * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  seperator: {
    height: 1,
    backgroundColor: Colors.greyBorder,
  },
  inputContainer: {
    backgroundColor: Colors.grey,
  },
  loadingCell: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: Colors.greyBorder,
  },
});

export default MovieListScreen;
