// Loader.tsx
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {verticalScale} from '../../utils/metrics.ts';

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="#8c8c8c" />
  </View>
);

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(100),
  },
});

export default Loader;
