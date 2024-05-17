import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CharactersItem from './CharacterItem.tsx';
import {FansCardType} from './FansCard.tsx';
import Pagination from '../../basic/Pagination.tsx';

const DATA: FansCardType[] = [
  {id: 'Female', title: 'Female Fans', count: 0},
  {id: 'Male', title: 'Male Fans', count: 0},
  {id: 'Others', title: 'Others', count: 0},
];
const CharactersList = () => {
  const [startItem, setStartItem] = useState<number>(0);
  const [maxItems, setMaxItems] = useState<number>(0);

  const handleNextPress = () => {
    console.log('next');
  };
  const handlePreviousPress = () => {
    console.log('previous');
  };

  return (
    <View>
      <FlatList
        data={DATA}
        style={styles.container}
        renderItem={({item}) => <CharactersItem data={item} />}
        keyExtractor={item => item.id}
      />
      <Pagination
        startItem={startItem}
        endItem={DATA.length}
        maxItems={maxItems}
        onNextPress={handleNextPress}
        onPreviousPress={handlePreviousPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
});

export default CharactersList;
