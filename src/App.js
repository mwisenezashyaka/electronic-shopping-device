import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* ... existing nav content ... */}
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="brand-name">YOU&I ELECTRONIC SHOP</span>
        </div>
          {/* Added Search Bar */}
          <div className="search-container">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-bar" 
          />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>


      </nav>

      {/* Rest of your existing content */}
      <div className="main-content">
        {/* ... existing device selection content ... */}
        

      {/* Device Selection Section */}
      <div className="main-content">
        <h1 className="section-title">Find Your Perfect Device</h1>
        
        <div className="device-categories">
          <div className="category-card">
            <img src="./download.jfif" alt="Smartphones" />
            <h3>Smartphones</h3>
            <p>Latest models from top brands</p>
            <button className="cta-button">View Stock (25+)</button>
          </div>

          <div className="category-card">
            <img src="download (2).jfif" alt="Laptops" />
            <h3>Laptops</h3>
            <p>Powerful machines for work and play</p>
            <button className="cta-button">View Stock (15+)</button>
          </div>

          <div className="category-card">
            <img src="download (3).jfif" alt="Tablets" />
            <h3>Tablets</h3>
            <p>Portable entertainment and productivity</p>
            <button className="cta-button">View Stock (10+)</button>
          </div>

          <div className="category-card">
            <img src="download (4).jfif" alt="Accessories" />
            <h3>Accessories</h3>
            <p>Covers, chargers, and more</p>
            <button className="cta-button">Explore Accessories</button>
          </div>
        </div>
{/* Login Form Section */}
<div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Welcome Back!</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
          <div className="login-links">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="#create-account">Create New Account</a>
          </div>
        </form>
      </div>

        <div className="stock-highlight">
          <h2>Current Stock Highlights</h2>
          <ul>
            <li>🔥 New iPhone 15 in stock</li>
            <li>💻 Gaming laptops up to 20% off</li>
            <li>📚 Student discounts available</li>
            <li>🚚 Free shipping on orders over $500</li>
          </ul>
        </div>
      </div>


      </div>
    </div>
  );
}

export default App;