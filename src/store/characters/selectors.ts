import {RootState} from '../index.ts';

export const selectCharacters = (state: RootState) =>
  state.characters.characters;
export const selectLikedCharacters = (state: RootState) =>
  state.characters.likedCharacters;
export const selectMaxCharacters = (state: RootState) =>
  state.characters.maxCharacters;
export const selectIsLoading = (state: RootState) => state.characters.isLoading;
export const selectChosenCharacter = (state: RootState) =>
  state.characters.chosenCharacter;
