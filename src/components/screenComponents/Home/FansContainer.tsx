import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import FansCard, {FansCardType} from './FansCard.tsx';
import {horizontalScale, verticalScale} from '../../../utils/metrics.ts';
import ScrollView = Animated.ScrollView;

const DATA: FansCardType[] = [
  {id: 'Female', title: 'Female Fans', count: 0},
  {id: 'Male', title: 'Male Fans', count: 0},
  {id: 'Others', title: 'Others', count: 0},
];

const FansContainer = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {DATA.map((fans, index) => (
        <FansCard
          key={fans.id}
          data={fans}
          customStyles={index !== DATA.length - 1 ? styles.itemMargin : {}}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: horizontalScale(10),
    paddingVertical: verticalScale(2),
  },
  itemMargin: {
    marginRight: horizontalScale(10),
  },
});

export default FansContainer;
