import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/login.scss";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For assessment, any login works
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <img src="/Group.svg" className="login-logo" alt="Lendsqr Logo" />
        </div>
        <div className="illustration">
          <img src="/pablo-sign-in.svg" alt="Login Illustration" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-form-wrapper">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="show-hide"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            <a href="#" className="forgot-password">
              FORGOT PASSWORD?
            </a>
            <button type="submit" className="login-btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
