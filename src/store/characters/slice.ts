import {createSlice} from '@reduxjs/toolkit';
import {getCharactersThunk} from './thunks.ts';

interface CharactersState {
  characters: [];
  isLoading: boolean;
}

const initialState: CharactersState = {
  characters: [],
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
  },
  extraReducers: builder => {
    builder.addCase(getCharactersThunk.fulfilled, (state, {payload}) => {
      console.log('payload', payload?.data);
    });
  },
});

export const {startLoading, stopLoading} = slice.actions;
export default slice.reducer;
