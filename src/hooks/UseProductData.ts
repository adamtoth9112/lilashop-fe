import { useState, useEffect } from 'react';
import { Product } from '../models/Product';
import { fetchProducts } from '../services/ProductService';

const useProductData = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return products;
};

export default useProductData;
