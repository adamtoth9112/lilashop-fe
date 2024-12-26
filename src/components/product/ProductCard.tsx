import React from 'react';
import { Product } from '../../models/Product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
