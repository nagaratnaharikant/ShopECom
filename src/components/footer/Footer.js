import React from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark pt-4 mt-5 text-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="first-item">
                <div className="logo mb-3 d-none d-md-block">
                  <img
                    className="img-fluid"
                    src={logo}
                    alt="hexashop ecommerce templatemo"
                  />
                </div>
                <ul>
                  <li>
                    <a href="#" className="text-light">
                      16501 Collins Ave, Sunny Isles Beach, FL 33160, United
                      States
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light">
                      shopecom@company.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light">
                      010-020-0340
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Shopping &amp; Categories</h4>
              <ul>
                <li>
                  <a href="#">Men’s Shopping</a>
                </li>
                <li>
                  <a href="#">Women’s Shopping</a>
                </li>
                <li>
                  <a href="#">Kid's Shopping</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Help &amp; Information</h4>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Tracking ID</a>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <div className="under-footer">
                <p>
                  Copyright © 2022 Shopecom Co., Ltd. All Rights Reserved.
                  <br />
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-info"
                        icon="fa-brands fa-facebook-f"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-info"
                        icon="fa-brands fa-x-twitter"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-info"
                        icon="fa-brands fa-linkedin-in"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        className="text-info"
                        icon="fa-brands fa-instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
