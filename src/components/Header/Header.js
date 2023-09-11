import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto p-4 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src={logo}
              alt="logo img"
              width="150"
              height="200"
            />
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mens">
                  Men's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/womens">
                  Women's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kids">
                  Kid's
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/womens">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="nav-link" to="/products">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <FontAwesomeIcon
              className="me-3"
              icon="fa-solid fa-cart-arrow-down"
            />

            <form className="d-flex">
              <div className="input-box">
                <input type="text" className="form-control" placeholder="Search..."/>
                <FontAwesomeIcon
                  className="search-icon"
                  icon="fa-solid fa-magnifying-glass"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
