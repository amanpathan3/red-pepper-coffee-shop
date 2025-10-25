import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <div className="auth-container">
        <div className="auth-box">
          <h2>Create Account ☕</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />

            {/* Password field with eye icon */}
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                required
              />
              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit">Sign Up</button>
          </form>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
