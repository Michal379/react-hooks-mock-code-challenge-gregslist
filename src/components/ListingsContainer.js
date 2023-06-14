// ListingsContainer.js

import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";

function ListingsContainer() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
// fetch items to display on the page
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.log(error));
  }, []);
// delete item from items list
  const handleDeleteListing = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((listing) => listing.id !== id));
        setFilteredData(filteredData.filter((listing) => listing.id !== id));
      })
      .catch((error) => console.log(error));
  };
// search item by name
  const handleSearch = (query) => {
    const filteredListings = data.filter((listing) =>
      listing.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredListings);
  };
// add a new item to the list
  
const handleAddListing = (listing) => {
  fetch("http://localhost:6001/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Corrected the typo
    },
    body: JSON.stringify(listing),
  })
    .then((response) => response.json())
    .then((newListing) => {
      setData((prevData) => [...prevData, newListing]); // Update the state with newListing
      setFilteredData((prevData) => [...prevData, newListing]); // Update the state with newListing
    })
    .catch((error) => console.log(error));
};
  

  return (
    <main>
      <Search onSearch={handleSearch} onAddListing={handleAddListing} />
      <ul className="cards">
        {filteredData.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onDelete={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
