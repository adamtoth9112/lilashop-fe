import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Change to your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});