import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { products } from "./products";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  const [ListOfProduct, setListOfProduct] = useState(products);
  const [Search, setSearch] = useState("");

  function searchProduct() {
    if (Search.trim() === "") {
    setListOfProduct(products);
    return; // Exit the function early
    }
    // Filter the products based on the search query
    const filteredProducts = products.filter((res) =>
      res.name.toLowerCase().includes(Search.toLowerCase())
    );

    setListOfProduct(filteredProducts);
  }

  return (
    <>
      <Header />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search the products"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchProduct}>Search</button>
      </div>
      <div className="product-container">
        {ListOfProduct.length > 0 ? (
            ListOfProduct.map((product) => (
             <Link key={product.id} to={`/productdetails/${product.id}`} className="product-link">
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-img" />
                <h3 className="product-name">{product.name}</h3>
                <p className="rating">⭐ {product.rating}</p>
                <p className="quantity">Quantity: {product.quantity}</p>
                <p className="price">₹{product.price}</p>
                <button className="product-btn">see more...</button>
              </div>
            </Link>
          ))
        ) : (
          // 👇 This message shows if no products match the search
          <h2 className="no-products">No products found 😕</h2>
        )}
      </div>

      <Footer />
    </>
  );
}
