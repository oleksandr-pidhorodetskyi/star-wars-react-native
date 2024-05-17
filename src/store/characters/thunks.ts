import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {starWarsApi} from '../../api/starWars.api.ts';
import {startLoading, stopLoading} from './slice.ts';

export const getCharactersThunk = createAsyncThunk(
  'characters/getCharactersThunk',
  async ({page}: {page: number}, {dispatch, rejectWithValue}) => {
    try {
      await dispatch(startLoading());
      const res = await starWarsApi.getCharacters(page);
      console.log('Characters', res);
      return {data: res?.data};
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    } finally {
      await dispatch(stopLoading());
    }
  },
);
