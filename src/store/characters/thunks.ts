import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {starWarsApi} from '../../api/starWars.api.ts';
import {startLoading, stopLoading} from './slice.ts';
import {getId} from '../../utils/getId.ts';

export const getCharactersThunk = createAsyncThunk(
  'characters/getCharactersThunk',
  async ({page}: {page: number}, {dispatch, rejectWithValue}) => {
    try {
      await dispatch(startLoading());
      const res = await starWarsApi.getCharacters(page);
      return {count: res?.data?.count, data: res?.data?.results};
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
export const getSearchCharactersThunk = createAsyncThunk(
  'characters/getSearchCharactersThunk',
  async (
    {name, page}: {name: string; page: number},
    {dispatch, rejectWithValue},
  ) => {
    try {
      await dispatch(startLoading());
      const res = await starWarsApi.getSearchCharacters(name, page);
      return {count: res?.data?.count, data: res?.data?.results};
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
export const getOneCharacterThunk = createAsyncThunk(
  'characters/getOneCharacterThunk',
  async ({id}: {id: string}, {dispatch, rejectWithValue}) => {
    try {
      await dispatch(startLoading());
      const res = await starWarsApi.getOneCharacter(id);
      const characterData = res.data;
      const homeworld = await starWarsApi.getCharacterSpec(
        'planets',
        getId(characterData.homeworld),
      );

      const speciesRequests = characterData.species.map((speciesUrl: string) =>
        starWarsApi.getCharacterSpec('species', getId(speciesUrl)),
      );

      const speciesResponses = await Promise.all(speciesRequests);
      const speciesNames = speciesResponses.map(response => response.data.name);

      return {
        data: {
          ...characterData,
          homeworld: homeworld.data.name,
          species: speciesNames,
        },
      };
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
