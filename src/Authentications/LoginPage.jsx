import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="auth-box">
          <h2>Welcome Back ☕</h2>
          <form>
            <input type="email" placeholder="Email Address" required />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit">Login</button>
          </form>

          <p>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
