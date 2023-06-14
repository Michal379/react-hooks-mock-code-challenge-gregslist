import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [data, setData] =useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
    console.log(data)
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
