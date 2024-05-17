import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {horizontalScale, verticalScale} from '../../../utils/metrics.ts';
import Search from '../../basic/Search.tsx';
import Pagination from '../../basic/Pagination.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux.ts';
import {
  selectCharacters,
  selectLikedCharacters,
  selectMaxCharacters,
} from '../../../store/characters/selectors.ts';
import {CHARACTERS_PER_PAGE} from '../../../constants';
import {
  getCharactersThunk,
  getSearchCharactersThunk,
} from '../../../store/characters/thunks.ts';
import CharactersItem from './CharacterItem.tsx';
import useDebounce from '../../../hooks/useDebounce.ts';

const ContentContainer = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters);
  const maxCharacters = useAppSelector(selectMaxCharacters);
  const likedCharacters = useAppSelector(selectLikedCharacters);

  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const debouncedSearch = useDebounce(search, 500);

  const currentPageFromOne = currentPage + 1;
  const startItem = currentPage * CHARACTERS_PER_PAGE + 1;
  const endItem = startItem + characters.length - 1;

  const handleNextPress = () => {
    setCurrentPage(prev => prev + 1);
  };
  const handlePreviousPress = () => {
    setCurrentPage(prev => prev - 1);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch.length !== 0) {
      dispatch(
        getSearchCharactersThunk({
          name: debouncedSearch,
          page: currentPageFromOne,
        }),
      );
    } else {
      dispatch(getCharactersThunk({page: currentPageFromOne}));
    }
  }, [currentPage, debouncedSearch]);

  return (
    <View style={styles.container}>
      <Search onChangeText={setSearch} value={search} />
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
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
  },
});

export default ContentContainer;
