import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="coffee-footer">
      <div className="footer-container">
        {/* Brand / Logo Section */}
        <div className="footer-brand">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2935/2935413.png"
            alt="Coffee Logo"
            className="footer-logo"
          />
          <h2 className="footer-title">Red Pepper Cafe</h2>
          <p className="footer-tagline">Where every sip feels like home ☕</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Find Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 12 Coffee Street, Pune, India</p>
          <p>📞 +91 1234567890</p>
          <p>✉️ hello@redpepper.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Red Pepper Cafe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
