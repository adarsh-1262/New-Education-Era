// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Backend URL
  withCredentials: true, // Allow sending cookies with requests
});

export default axiosInstance;
