import React from 'react';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../components/basic/Header.tsx';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux.ts';
import {
  selectChosenCharacter,
  selectIsLoading,
} from '../store/characters/selectors.ts';
import {getId} from '../utils/getId.ts';
import withLoader from '../components/basic/withLoader.tsx';
import {clearChosenCharacter} from '../store/characters/slice.ts';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, verticalScale} from '../utils/metrics.ts';
import CharacterInfo from '../components/screenComponents/Character/CharacterInfo.tsx';
import {generateCharacterImgUrl} from '../utils/generateCharacterImgUrl.ts';

const ViewWithLoader = withLoader(View);
const Character = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const data = useAppSelector(selectChosenCharacter);
  const isLoading = useAppSelector(selectIsLoading);

  const characterId = getId(data ? data.url : '');
  const characterImg = generateCharacterImgUrl(characterId);
  const handleOnBack = () => {
    dispatch(clearChosenCharacter());
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <Header onBack={handleOnBack}>
        <Text style={styles.headerTitle}>Character</Text>
      </Header>
      <ViewWithLoader loading={isLoading}>
        {data ? (
          <>
            <Image
              source={{
                uri: characterImg,
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <CharacterInfo data={data} />
          </>
        ) : (
          <Text style={styles.errorMessage}>
            Sorry! Something goes wrong :( Try one more time!
          </Text>
        )}
      </ViewWithLoader>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    marginLeft: '25%',
    fontSize: moderateScale(20),
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(20),
  },
  errorMessage: {
    fontSize: moderateScale(25),
    color: '#9a9898',
  },
});

export default Character;
