// Search.js

import React, { useState } from "react";

function Search({ onSearch, onAddListing }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [newListing, setNewListing] = useState({
    price: "",
    image: "",
    description: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewListing((prevListing) => ({
      ...prevListing,
      [name]: value,
    }));
  };

  const handleAddListing = (e) => {
    e.preventDefault();
    onAddListing(newListing);
    setNewListing({
      price: "",
      image: "",
      description: "",
      location: "",
    });
  };

  return (
    <div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search free stuff"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">🔍</button>
      </form>
      <form className="add-listing-form" onSubmit={handleAddListing}>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newListing.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newListing.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newListing.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newListing.location}
          onChange={handleInputChange}
        />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
}

export default Search;
