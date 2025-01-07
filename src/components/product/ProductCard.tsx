import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/CartSlice';

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, price, quantity: 1 }));
    };

    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <div>
                <Link to={`/product/${id}`} className="product-details-link">
                    View Details
                </Link>
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
