import React from "react";
import "./AboutPage.css";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <h1>Welcome to Red Pepper Cafe</h1>
        <p>Where every cup tells a story ☕</p>
      </section>

      {/* Info Cards Section */}
      <section className="about-cards">
        <div className="card">
          <img
            src="../../public/Images/about-card-1.avif"
            alt="Our Story"
          />
          <h3>Our Story</h3>
          <p>
            Started as a small cafe with a big dream, we focus on crafting perfect coffee
            experiences for everyone.
          </p>
        </div>

        <div className="card">
          <img
            src="../../public/Images/about-card-2.avif"
            alt="Our Mission"
          />
          <h3>Our Mission</h3>
          <p>
            To serve ethically sourced, high-quality coffee in a cozy environment that
            feels like home.
          </p>
        </div>

        <div className="card">
          <img
            src="../../public/Images/about-card-3.avif"
            alt="Our Promise"
          />
          <h3>Our Promise</h3>
          <p>
            Sustainability, community, and exceptional coffee are at the heart of everything
            we do.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
