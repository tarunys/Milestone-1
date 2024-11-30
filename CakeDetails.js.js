import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CakeDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cake-details">
      <h2>Cake Details for {id}</h2>
      <p>Ingredients: Flour, Sugar, Cocoa...</p>
      <p>Flavor: Chocolate</p>
      <p>Price: $25</p>
      <div>
        <label>Quantity: </label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default CakeDetails;
