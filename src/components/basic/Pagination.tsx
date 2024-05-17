import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowLeft from '../../assets/icons/arrowLeft.svg';
import ArrowRight from '../../assets/icons/arrowRight.svg';
import {horizontalScale, verticalScale} from '../../utils/metrics.ts';

interface PaginationProps {
  startItem: number;
  endItem: number;
  maxItems: number;
  onNextPress: () => void;
  onPreviousPress: () => void;
}
const Pagination: React.FC<PaginationProps> = ({
  startItem,
  endItem,
  maxItems,
  onNextPress,
  onPreviousPress,
}) => {
  const isDisabledPrevious = startItem <= 1;
  const isDisabledNext = endItem === maxItems;

  return (
    <View style={styles.container}>
      <Text style={styles.pagesText}>
        {startItem} - {endItem} of {maxItems}
      </Text>
      <TouchableOpacity
        style={isDisabledPrevious && styles.disabledBtn}
        disabled={isDisabledPrevious}
        onPress={onPreviousPress}>
        <ArrowLeft />
      </TouchableOpacity>
      <TouchableOpacity
        style={isDisabledNext && styles.disabledBtn}
        disabled={isDisabledNext}
        onPress={onNextPress}>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: horizontalScale(10),
    paddingVertical: verticalScale(2),
  },
  pagesText: {
    color: '#000',
  },
  disabledBtn: {
    opacity: 0.5,
  },
});

export default Pagination;
