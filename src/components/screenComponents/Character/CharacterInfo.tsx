import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

type characterSpecType = {
  id: string;
  title: string;
  value: string;
};

const CharacterInfo: React.FC<CharacterInfoProps> = ({data}) => {
  const characterSpec: characterSpecType[] = [
    {
      id: '1',
      title: 'Birth year',
      value: data.birth_year,
    },
    {
      id: '2',
      title: 'Gender',
      value: data.gender,
    },
    {
      id: '3',
      title: 'Homeworld',
      value: data.homeworld,
    },
    {
      id: '4',
      title: 'Species',
      value: data.species.join(', '),
    },
  ];

  return (
    <View style={styles.infoContainer}>
      <View style={styles.nameContainer}>
        <LikeButton data={data} />
        <Text style={styles.name}>{data?.name}</Text>
      </View>
      <View style={styles.specContainer}>
        {characterSpec.map(spec => (
          <Text key={spec.id} style={styles.specText}>
            <Text style={styles.specTitle}>{spec.title}: </Text>
            {spec.value}
          </Text>
        ))}
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
