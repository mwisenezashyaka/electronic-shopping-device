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
          <span className="brand-name">YOU&I DRIGO ELECTRONIC SHOP</span>
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
          <div className="auth-buttons">
      <button className='login'>Login</button>
      <button className='sign'>Sign Up</button>
    </div>

        </ul>
      </nav>
      <div className="main-content">
  {/* New Shop Details Section */}
  <div className="shop-details">
    <div className="shop-hero">
      <h2>Welcome to YOU&I ELECTRONIC SHOP</h2>
      <p>Rwanda's Premier Destination for Cutting-Edge Technology</p>
    </div>
    
    <div className="usp-grid">
      <div className="usp-card">
        <h3>🛡️ Certified Quality</h3>
        <p>All products come with official manufacturer warranties</p>
      </div>
      <div className="usp-card">
        <h3>🚚 Same-Day Delivery</h3>
        <p>Free delivery within Kibuye for orders above $300</p>
      </div>
      <div className="usp-card">
        <h3>💳 Flexible Payments</h3>
        <p>Mobile money, credit cards, or installment plans</p>
      </div>
      <div className="usp-card">
        <h3>📞 24/7 Support</h3>
        <p>Expert technical assistance whenever you need it</p>
      </div>
    </div>

    <div className="featured-brands">
      <h3>Shop With Us  Top Brands:</h3>
      <div className="brands-grid">
      <img src="/hp.png" alt="HP" />
        <img src="/samsung.png" alt="Samsung" />
        <img src="/apple.jfif" alt="Apple" />
        <img src="/xx.png" alt="Xiaomi" />
        <img src="/tecno.png" alt="HP" />
        <img src="/pixel.png" alt="HP" />
        <img src="/lenovo.jfif" alt="HP" />
        <img src="/sony.png" alt="HP" />
      </div>
    </div>
  </div>
  </div>

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

      {/* Footer */}
      <footer className="sitefooter">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Visit Our Store</h4>
            <p>123 Tech Avenue</p>
            <p>Rufungo Street, Kibuye</p>
            <p>Rwanda</p>
          </div>

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-media">
              <a href="https://facebook.com/julesdrigo" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com/julesdrigo" target="_blank" rel="noopener noreferrer">
                <img src="/x.png" alt="Twitter" />
              </a>
              <a href="https://instagram.com/julesdrigo" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📞 (+250) 794673382</p>
            <p>✉️ info@drigo-electronics.com</p>
            <p>🕒 Mon-Sat: 9AM - 8PM EST</p>
          </div>
        </div>

        <div className="footer-section">
            <h4>OUR PARTENERS</h4>
            <p>23 ONLINE SHOP</p>
            <p>📞 (+250) 790011137</p>
            <p>@MUHETOO</p>
            <p>🕒 Mon-Sat: 9AM - 8PM EST</p>
          </div>


        <div className="footer-bottom">
          <p>© 2023 YOU&I ELECTRONIC SHOP. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;