import {createSlice} from '@reduxjs/toolkit';
import {
  getCharactersThunk,
  getOneCharacterThunk,
  getSearchCharactersThunk,
} from './thunks.ts';
import {CharacterType} from './types.ts';

interface CharactersState {
  maxCharacters: number;
  characters: CharacterType[];
  likedCharacters: CharacterType[];
  chosenCharacter: CharacterType | null;
  isLoading: boolean;
}

const initialState: CharactersState = {
  maxCharacters: 0,
  characters: [],
  likedCharacters: [],
  chosenCharacter: null,
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
    clearChosenCharacter(state) {
      state.chosenCharacter = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCharactersThunk.fulfilled, (state, {payload}) => {
      const {data, count} = payload;
      state.maxCharacters = count;
      state.characters = data;
    });
    builder.addCase(getSearchCharactersThunk.fulfilled, (state, {payload}) => {
      const {data, count} = payload;
      state.maxCharacters = count;
      state.characters = data;
    });
    builder.addCase(getOneCharacterThunk.fulfilled, (state, {payload}) => {
      const {data} = payload;
      state.chosenCharacter = data;
    });
  },
});

export const {
  startLoading,
  stopLoading,
  clearLikedCharacters,
  changeLikeStatus,
  clearChosenCharacter,
} = slice.actions;
export default slice.reducer;
