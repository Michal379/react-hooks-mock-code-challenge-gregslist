// ListingsContainer.js

import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";

function ListingsContainer() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.log(error));
  }, []);

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

  const handleSearch = (query) => {
    const filteredListings = data.filter((listing) =>
      listing.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredListings);
  };

  return (
    <main>
      <Search onSearch={handleSearch} />
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
