import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics.ts';
import {CharacterType} from '../../../store/characters/types';
import {useAppDispatch} from '../../../hooks/useRedux.ts';
import {useNavigation} from '@react-navigation/native';
import {getId} from '../../../utils/getId.ts';
import {getOneCharacterThunk} from '../../../store/characters/thunks.ts';
import LikeButton from '../../basic/LikeButton.tsx';

interface CharactersItemProps {
  data: CharacterType;
  customStyles?: StyleProp<ViewStyle>;
}
const CharactersItem: React.FC<CharactersItemProps> = ({
  data,
  customStyles = {},
}) => {
  const characterId = getId(data.url);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const handleChoseCharacter = () => {
    dispatch(getOneCharacterThunk({id: characterId}));
    navigation.navigate('Character');
  };

  return (
    <TouchableOpacity
      onPress={handleChoseCharacter}
      style={[styles.container, customStyles]}>
      <LikeButton data={data} />
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {data.name}
      </Text>
      <Text style={styles.gender} numberOfLines={1} ellipsizeMode="tail">
        {data.gender}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: horizontalScale(10),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
  },
  name: {
    color: '#000',
    fontSize: moderateScale(16),
    maxWidth: '50%',
    textAlign: 'left',
  },
  gender: {
    fontSize: moderateScale(16),
    color: '#000',
    maxWidth: '35%',
  },
});

export default CharactersItem;
