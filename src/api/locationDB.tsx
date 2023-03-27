import axios from 'axios';

const locationDB = axios.create({
  baseURL: 'https://api.geoapify.com/v1/geocode',
  params: {
    apiKey: '8aae4834527f42e48d1d459ecc97d4c0',
    format: 'json',
  },
});

export default locationDB;
