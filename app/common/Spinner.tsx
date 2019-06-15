import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface Props {
  size?: number | 'small' | 'large';
}

const Spinner = ({ size }: Props) => (
  <View style={styles.spinner}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.defaultProps = {
  size: 'large',
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
