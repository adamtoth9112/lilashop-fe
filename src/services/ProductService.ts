import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

// Fetch a single product by ID
export const fetchProductById = async (id: string) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

