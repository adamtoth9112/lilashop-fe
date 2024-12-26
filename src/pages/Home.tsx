import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to the Lilashop!</h1>
      <p>Your one-stop shop for awesome products!</p>
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

export default Home;
