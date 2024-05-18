import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import FansCard from './FansCard.tsx';
import {horizontalScale, verticalScale} from '../../../utils/metrics.ts';
import {FansCardType} from '../../../store/characters/types.ts';

const FansContainer = ({countedData}: {countedData: FansCardType[]}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {countedData.map((fans, index) => (
        <FansCard
          key={fans.id}
          data={fans}
          customStyles={
            index !== countedData.length - 1 ? styles.itemMargin : {}
          }
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
