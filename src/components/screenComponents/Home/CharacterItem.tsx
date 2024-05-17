import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics.ts';
import {CharacterType} from '../../../store/characters/types';
import HeartFilled from '../../../assets/icons/heart-filled.svg';
import HeartOutlined from '../../../assets/icons/heart-outlined.svg';
import {useAppDispatch} from '../../../hooks/useRedux.ts';
import {changeLikeStatus} from '../../../store/characters/slice.ts';

interface CharactersItemProps {
  data: CharacterType;
  likedCharacters: CharacterType[];
  customStyles?: StyleProp<ViewStyle>;
}
const CharactersItem: React.FC<CharactersItemProps> = ({
  data,
  customStyles = {},
  likedCharacters,
}) => {
  const isLiked = likedCharacters.some(
    character => character.name === data.name,
  );

  const dispatch = useAppDispatch();

  const handleLikePress = () => {
    dispatch(changeLikeStatus(data));
  };

  return (
    <View style={[styles.container, customStyles]}>
      <TouchableOpacity onPress={handleLikePress}>
        {isLiked ? <HeartFilled /> : <HeartOutlined />}
      </TouchableOpacity>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {data.name}
      </Text>
      <Text style={styles.gender} numberOfLines={1} ellipsizeMode="tail">
        {data.gender}
      </Text>
    </View>
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
