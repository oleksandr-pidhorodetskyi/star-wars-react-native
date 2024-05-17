import {StarWarsInstance} from './config.ts';

export const starWarsApi = {
  getCharacters: async (page: number) => {
    return await StarWarsInstance.get(`/people?page=${page}`);
  },
  getSearchCharacters: async (name: string, currentPage: number) => {
    return await StarWarsInstance.get(
      `/people/?search=${name}&page=${currentPage}`,
    );
  },
};
