import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../models/Product';
import { fetchProductById } from '../../services/ProductService';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProductDetail = async () => {
      if (productId) {
        const productDetail = await fetchProductById(productId);
        setProduct(productDetail);
      }
    };

    getProductDetail();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
