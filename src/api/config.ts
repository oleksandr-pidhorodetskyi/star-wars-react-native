import axios from 'axios';

export const StarWarsInstance = axios.create({
  baseURL: process.env.STAR_WARS_BASE_URL,
});
