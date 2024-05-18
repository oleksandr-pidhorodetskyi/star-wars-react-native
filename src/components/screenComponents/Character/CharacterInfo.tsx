import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../../hooks/useRedux.ts';
import {selectIsLoading} from '../../../store/characters/selectors.ts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics.ts';
import LikeButton from '../../basic/LikeButton.tsx';
import {CharacterType} from '../../../store/characters/types';

interface CharacterInfoProps {
  data: CharacterType;
}
const CharacterInfo: React.FC<CharacterInfoProps> = ({data}) => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <View style={styles.infoContainer}>
      <View style={styles.nameContainer}>
        <LikeButton data={data} />
        <Text style={styles.name}>{data?.name}</Text>
      </View>
      <View style={styles.specContainer}>
        <Text style={styles.specText}>
          <Text style={styles.specTitle}>Birth year: </Text>
          {data?.birth_year}
        </Text>
        <Text style={styles.specText}>
          <Text style={styles.specTitle}>Gender: </Text>
          {data?.gender}
        </Text>
        <Text style={styles.specText}>
          <Text style={styles.specTitle}>Homeworld: </Text>
          {data?.homeworld}
        </Text>
        <Text style={styles.specText}>
          <Text style={styles.specTitle}>Species: </Text>
          {data?.species.join(', ')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: '#dedede',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  name: {
    fontSize: moderateScale(20),
    marginLeft: horizontalScale(20),
  },
  specContainer: {
    rowGap: verticalScale(5),
  },
  specText: {
    fontSize: moderateScale(16),
  },
  specTitle: {
    fontWeight: 'bold',
  },
});

export default CharacterInfo;
