import axios from 'axios';
('https://vinly-api.herokuapp.com/');
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
