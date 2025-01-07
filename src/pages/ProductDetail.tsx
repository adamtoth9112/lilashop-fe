import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchProductDetail } from '../slices/ProductSlice';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { productDetail, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetail(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!productDetail) return <p>No product found</p>;

  return (
      <div>
        <h1>{productDetail.name}</h1>
        <p>{productDetail.description}</p>
        <p>Price: ${productDetail.price}</p>
      </div>
  );
};

export default ProductDetail;
