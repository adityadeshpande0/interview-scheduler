// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are a team of dedicated developers.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@company.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://www.twitter.com" className="text-white">Twitter</a></li>
              <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="mb-0">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
