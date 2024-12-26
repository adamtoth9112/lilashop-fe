import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // You can replace this with an API call to fetch products
  useEffect(() => {
    const mockProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 99.99 },
      { id: 2, name: 'Product 2', price: 149.99 },
      { id: 3, name: 'Product 3', price: 199.99 },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="products">
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
