import React, { useState, useEffect, useContext } from "react";
import CardVariant from "../CardVariant/CardVariant";
import apiClient from "api/apiClient";

import ThemeContext from "../../pages/context/ThemeContext";

const ProductsAndService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("A-Z");

  useEffect(() => {
    apiClient.get("/items").then((response) => {
      setItems(response.data);
      setFilteredItems(response.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = items.filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === "A-Z") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setFilteredItems(filtered);
  }, [searchQuery, items, sortOrder]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    !isLoading && (
      <div className="products-and-service">
        <div className="products-and-service-title">
          <p>Products and Service</p>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              width: "20%",
              padding: "10px",
              border: "none",
              marginRight: "20px",
            }}
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              onClick={() => setSortOrder("A-Z")}
              style={{
                padding: "10px 20px",
                background: "black",
                borderRadius: "10px",
              }}
            >
              Sort A-Z
            </button>

            <button
              onClick={() => setSortOrder("Z-A")}
              style={{
                padding: "10px 20px",
                background: "black",
                borderRadius: "10px",
              }}
            >
              Sort Z-A
            </button>
          </div>
        </div>
        <div className="products-and-service-cards-variants-container">
          {filteredItems.map((card, i) => (
            <CardVariant
              key={card.id}
              image={card.image}
              serviceName={card.name}
              category={card.category}
              city={card.city}
              description={card.description}
              products={card.products}
              id={card.id}
            />
          ))}
        </div>
        Current theme is: {theme}
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            background: "black",
            borderRadius: "10px",
          }}
        >
          Toggle Theme
        </button>
      </div>
    )
  );
};

export default ProductsAndService;
