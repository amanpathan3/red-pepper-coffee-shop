import React from "react";
import "./AboutPage.css";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-content">
          <h1>About Our Coffee Shop ☕</h1>
          <p>
            Welcome to <strong>Café Aroma</strong> — where every cup tells a story!
            We’re passionate about crafting the perfect brew, using freshly roasted
            beans and the finest ingredients sourced from local farms.
          </p>

          <p>
            Our journey began with a simple dream — to bring people together over a
            warm cup of coffee. Whether you’re here to work, relax, or catch up with
            friends, we’ve created a cozy space that feels like home.
          </p>

          <p>
            From cappuccinos to cold brews, our skilled baristas put heart into every
            pour. Thank you for being part of our story!
          </p>

          <div className="about-image">
            <img src="../../public/Images/about-coffee.jpg" alt="Coffee Shop" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
