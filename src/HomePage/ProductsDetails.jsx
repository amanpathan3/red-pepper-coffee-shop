import { useState , useEffect} from "react";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

import { useParams, Link } from "react-router-dom";
export function ProductDetails() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (<h2>Not</h2>);
    }
    return (
        <>
            <Header />
            <div className="product-container">
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="rating">⭐ {product.rating}</p>
                    <p className="quantity">Quantity: {product.quantity}</p>
                    <p className="price">₹{product.price}</p>
                    <button className="product-btn">Buy</button>
                </div>
            </div>
            <Footer />
        </>
    );
}