import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          SuperNews
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 container d-flex justify-content-between">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link text-white">
                Business
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link text-white">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link text-white">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link text-white">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link text-white">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link text-white">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
