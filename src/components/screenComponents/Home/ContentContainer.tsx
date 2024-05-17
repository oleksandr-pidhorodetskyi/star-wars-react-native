import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {horizontalScale, verticalScale} from '../../../utils/metrics.ts';
import Search from '../../basic/Search.tsx';
import CharactersList from './CharactersList.tsx';

const ContentContainer = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <View style={styles.container}>
      <Search onChangeText={setSearch} value={search} />
      <CharactersList />
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
