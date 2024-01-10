import axios from 'axios';
const baseUrl = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

const authInterceptors = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
};

baseUrl.interceptors.request.use(authInterceptors);

export default baseUrl;
