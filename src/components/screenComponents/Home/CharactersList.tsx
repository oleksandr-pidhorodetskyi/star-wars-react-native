import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CharactersItem from './CharacterItem.tsx';
import Pagination from '../../basic/Pagination.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux.ts';
import {getCharactersThunk} from '../../../store/characters/thunks.ts';
import {
  selectCharacters,
  selectLikedCharacters,
  selectMaxCharacters,
} from '../../../store/characters/selectors.ts';
import {CHARACTERS_PER_PAGE} from '../../../constants';

const CharactersList = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters);
  const maxCharacters = useAppSelector(selectMaxCharacters);
  const likedCharacters = useAppSelector(selectLikedCharacters);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const startItem = currentPage * CHARACTERS_PER_PAGE + 1;
  const endItem = startItem + characters.length - 1;

  const handleNextPress = () => {
    setCurrentPage(prev => prev + 1);
  };
  const handlePreviousPress = () => {
    setCurrentPage(prev => prev - 1);
  };

  useEffect(() => {
    dispatch(getCharactersThunk({page: currentPage + 1}));
  }, [currentPage]);

  return (
    <View>
      <FlatList
        data={characters}
        style={styles.container}
        renderItem={({item}) => (
          <CharactersItem data={item} likedCharacters={likedCharacters} />
        )}
        keyExtractor={(item, index) => item.name + index}
      />
      <Pagination
        startPageItem={startItem}
        endPageItem={endItem}
        maxItems={maxCharacters}
        onNextPress={handleNextPress}
        onPreviousPress={handlePreviousPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CharactersList;
