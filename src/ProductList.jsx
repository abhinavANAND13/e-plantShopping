import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          id: 1,
          name: 'Snake Plant',
          image: 'https://via.placeholder.com/150?text=Snake+Plant',
          description: 'Tolerates low light and irregular watering',
          cost: '$15'
        },
        {
          id: 2,
          name: 'Spider Plant',
          image: 'https://via.placeholder.com/150?text=Spider+Plant',
          description: 'Easy to grow and propagate',
          cost: '$12'
        },
        {
          id: 3,
          name: 'Peperomia',
          image: 'https://via.placeholder.com/150?text=Peperomia',
          description: 'Compact and decorative',
          cost: '$18'
        },
        {
          id: 4,
          name: 'Boston Fern',
          image: 'https://via.placeholder.com/150?text=Boston+Fern',
          description: 'Lush green fronds',
          cost: '$22'
        }
      ]
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          id: 5,
          name: 'Aloe Vera',
          image: 'https://via.placeholder.com/150?text=Aloe+Vera',
          description: 'Healing succulent',
          cost: '$20'
        },
        {
          id: 6,
          name: 'Mint Plant',
          image: 'https://via.placeholder.com/150?text=Mint+Plant',
          description: 'Fresh aromatic leaves',
          cost: '$10'
        },
        {
          id: 7,
          name: 'Tulsi Plant',
          image: 'https://via.placeholder.com/150?text=Tulsi+Plant',
          description: 'Sacred basil variety',
          cost: '$16'
        },
        {
          id: 8,
          name: 'Lemon Grass',
          image: 'https://via.placeholder.com/150?text=Lemon+Grass',
          description: 'Aromatic and useful',
          cost: '$14'
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowPlants(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowPlants(true);
  };

  return (
    <div className="product-list">
      {showPlants && (
        <div className="plants-container">
          {plantsArray.map((category) => (
            <div key={category.category} className="category-section">
              <h2>{category.category}</h2>
              <div className="plants-grid">
                {category.plants.map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="cost">{plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {showCart && <CartItem onContinueShopping={handleContinueShopping} />}
    </div>
  );
}

export default ProductList;