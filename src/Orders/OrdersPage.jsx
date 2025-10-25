import { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "./OrdersPage.css";

export function OrdersPage() {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/orders");
    const data = await res.json();
    setOrders(data);
  };

  // Cancel (Delete) order
  const handleCancelOrder = async (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
    if (!confirmCancel) return;

    try {
      const res = await fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Update UI instantly
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
      } else {
        alert("Failed to cancel order");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Server error while canceling order");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <div className="orders-container">
        <h2>Your Orders ☕</h2>

        {orders.length === 0 ? (
          <p className="no-orders">You haven’t ordered anything yet.</p>
        ) : (
          <div className="orders-grid">
            {orders.map((item) => (
              <div key={item.id} className="order-card">
                <img
                  src={item.image.replace("../../public/", "/")}
                  alt={item.name}
                  className="order-img"
                />
                <div className="order-info">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Rating: ⭐ {item.rating}</p>
                  <p className="order-price">₹{item.price}</p>
                  <button
                    className="cancel-btn"
                    onClick={() => handleCancelOrder(item.id)}
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
