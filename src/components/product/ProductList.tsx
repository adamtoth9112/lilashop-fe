import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../models/Product';
import { fetchProducts } from '../../services/ProductService';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => console.log(product.name)} />
      ))}
    </div>
  );
};

export default ProductList;
