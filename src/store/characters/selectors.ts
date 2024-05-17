import {RootState} from '../index.ts';

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
