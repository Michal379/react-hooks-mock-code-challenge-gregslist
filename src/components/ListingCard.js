// ListingCard.js

import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const { id, price, image, description, location } = listing;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
