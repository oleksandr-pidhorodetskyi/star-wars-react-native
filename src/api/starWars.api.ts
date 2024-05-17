import {StarWarsInstance} from './config.ts';

export const starWarsApi = {
  getCharacters: async (page: number) => {
    const res = await StarWarsInstance.get(`/people?page=${page}`);
    console.log('res2', res);
    return res;
  },
};
