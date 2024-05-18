import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/metrics.ts';
import HeartFilled from '../../assets/icons/heart-filled.svg';
import HeartOutlined from '../../assets/icons/heart-outlined.svg';
import {changeLikeStatus} from '../../store/characters/slice.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux.ts';
import {CharacterType} from '../../store/characters/types';
import {selectLikedCharacters} from '../../store/characters/selectors.ts';

interface LikeButtonProps extends TouchableOpacityProps {
  data: CharacterType;
  customStyles?: StyleProp<ViewStyle>;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  data,
  customStyles = {},
  ...rest
}) => {
  const dispatch = useAppDispatch();
  const likedCharacters = useAppSelector(selectLikedCharacters);

  const isLiked = likedCharacters.some(
    character => character.name === data?.name,
  );

  const handleLikePress = () => {
    dispatch(changeLikeStatus(data));
  };
  return (
    <TouchableOpacity
      onPress={handleLikePress}
      style={[styles.btn, customStyles]}
      {...rest}>
      {isLiked ? <HeartFilled /> : <HeartOutlined />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
  },
});

export default LikeButton;
