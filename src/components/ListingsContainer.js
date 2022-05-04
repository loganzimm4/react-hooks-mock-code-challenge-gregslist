import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [items, setItems] = useState([]);

  useEffect (() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(items => setItems(items))
  }, []);

  return (
    <main>
      <ul className="cards">
        <ListingCard {...items.map(item => {
          return setItems(item)
        })} />
      </ul>
    </main>
  );
}

export default ListingsContainer;
