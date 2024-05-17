import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../components/screenComponents/Home/Header.tsx';
import {horizontalScale, verticalScale} from '../utils/metrics.ts';
import ContentContainer from '../components/screenComponents/Home/ContentContainer.tsx';

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Header />
        <ContentContainer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f6f5f3',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  contentContainer: {
    width: '90%',
    marginTop: horizontalScale(10),
    marginHorizontal: 'auto',
    rowGap: verticalScale(10),
  },
});

export default Home;
