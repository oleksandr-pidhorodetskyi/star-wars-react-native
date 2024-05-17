import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../basic/CustomButton.tsx';
import {horizontalScale, moderateScale} from '../../../utils/metrics.ts';
import FansContainer from './FansContainer.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux.ts';
import {selectLikedCharacters} from '../../../store/characters/selectors.ts';
import {clearLikedCharacters} from '../../../store/characters/slice.ts';
import {FansCardType} from '../../../store/characters/types';
import {parseCountGanders} from '../../../utils/parseCountGanders.ts';

const Header = () => {
  const dispatch = useAppDispatch();
  const likedCharacters = useAppSelector(selectLikedCharacters);

  const contedGenders = parseCountGanders(likedCharacters);

  const countedData: FansCardType[] = [
    {id: 'Female', title: 'Female Fans', count: contedGenders.female},
    {id: 'Male', title: 'Male Fans', count: contedGenders.male},
    {id: 'Others', title: 'Others', count: contedGenders.other},
  ];

  const handleClearFans = () => {
    dispatch(clearLikedCharacters());
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Fans</Text>
        <CustomButton onPress={handleClearFans}>Clear fans</CustomButton>
      </View>
      <FansContainer countedData={countedData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: horizontalScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '300',
  },
});

export default Header;
