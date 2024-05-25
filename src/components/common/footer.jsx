import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css"; // Custom CSS file for additional styles

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Providing quality education for over 20 years. We strive to
              nurture the leaders of tomorrow.
            </p>
          </div>
          {/* Column 2 */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-map-marker-alt"></i> 123 Main Street,
                  Anytown, AN 12345
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone"></i> (123) 456-7890
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope"></i> info@school.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <small>&copy; 2024 My School. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
