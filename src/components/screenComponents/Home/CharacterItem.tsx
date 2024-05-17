import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics.ts';

export type FansCardType = {
  id: string;
  title: string;
  count: number;
};
interface CharactersItemProps {
  data: FansCardType;
  customStyles?: StyleProp<ViewStyle>;
}
const CharactersItem: React.FC<CharactersItemProps> = ({
  data,
  customStyles = {},
}) => {
  return (
    <View style={[styles.container, customStyles]}>
      <Text style={styles.count}>{data.count}</Text>
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    width: verticalScale(200),

    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    fontSize: moderateScale(16),
  },
  count: {
    fontSize: moderateScale(24),
  },
});

export default CharactersItem;
