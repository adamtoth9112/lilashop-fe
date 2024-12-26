import { Product } from '../models/Product';
import { api } from '../utils/api';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products');
  return response.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
