import {
  createAppContainer,
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';
import { Colors, Routes } from 'app/constants';
import { View } from 'react-native';
import MovieListScreen from 'app/features/MovieListScreen';

const moviesRouteConfig: NavigationRouteConfig = {
  [`${Routes.Root.movieList}`]: {
    screen: MovieListScreen,
  },
  [`${Routes.Root.movieDetail}`]: {
    screen: View,
  },
};

const moviesNavigatorConfig: StackNavigatorConfig = {
  initialRouteName: Routes.Root.movieList,
  mode: 'card',
  cardStyle: { backgroundColor: Colors.greyLight },
  headerMode: 'none',
};

const MoviesNavigator = createStackNavigator(
  moviesRouteConfig,
  moviesNavigatorConfig
);

// https://reactnavigation.org/blog/2018/11/17/react-navigation-3.0.html
const MoviesAppContainer = createAppContainer(MoviesNavigator);

export default MoviesAppContainer;
