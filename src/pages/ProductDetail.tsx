import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      // Mock fetch from an API based on the id
      const fetchedProduct = {
        id: parseInt(id),
        name: `Product ${id}`,
        price: 10.99 * parseInt(id), // Example pricing based on product ID
        description: `This is a detailed description of Product ${id}.`,
      };
      setProduct(fetchedProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
