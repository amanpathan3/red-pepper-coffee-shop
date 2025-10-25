import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  const [listOfProduct, setListOfProduct] = useState([]); 
  const [allProducts, setAllProducts] = useState([]); 
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setListOfProduct(data);
      setAllProducts(data); 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProduct = () => {
    if (search.trim() === "") {
      setListOfProduct(allProducts); 
      return;
    }

    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setListOfProduct(filteredProducts);
  };

  return (
    <>
      <Header />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search the products"
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchProduct}>Search</button>
      </div>

      <div className="product-container">
        {listOfProduct.length > 0 ? (
          listOfProduct.map((product) => (
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
          <h2 className="no-products">No products found 😕</h2>
        )}
      </div>

      <Footer />
    </>
  );
}
