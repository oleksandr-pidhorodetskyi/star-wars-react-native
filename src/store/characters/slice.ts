import {createSlice} from '@reduxjs/toolkit';
import {getCharactersThunk} from './thunks.ts';
import {CharacterType} from './types';

interface CharactersState {
  maxCharacters: number;
  characters: CharacterType[];
  likedCharacters: CharacterType[];
  isLoading: boolean;
}

const initialState: CharactersState = {
  maxCharacters: 0,
  characters: [],
  likedCharacters: [],
  isLoading: false,
};

export const slice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    clearLikedCharacters(state) {
      state.likedCharacters = [];
    },
    changeLikeStatus(state, {payload}) {
      const isLiked = state.likedCharacters.some(
        character => character.name === payload.name,
      );

      if (isLiked) {
        state.likedCharacters = state.likedCharacters.filter(
          character => character.name !== payload.name,
        );
      } else {
        state.likedCharacters.push(payload);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getCharactersThunk.fulfilled, (state, {payload}) => {
      const {data, count} = payload;
      state.maxCharacters = count;
      state.characters = data;
    });
  },
});

export const {
  startLoading,
  stopLoading,
  clearLikedCharacters,
  changeLikeStatus,
} = slice.actions;
export default slice.reducer;
