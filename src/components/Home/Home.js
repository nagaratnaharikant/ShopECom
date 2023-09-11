import React from "react";
import grid1 from "../../assets/images/grid1.jpg";
import grid2 from "../../assets/images/grid2.jpg";
import grid3 from "../../assets/images/grid3.jpg";
import grid4 from "../../assets/images/grid4.jpg";
import leftbanner from "../../assets/images/leftbanner.jpg";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subscribe from "../subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <div className="container-fluid mt-5 pt-5">
        <div className="row mt-5 pt-5">
          <div className="col-md-5 d-flex flex-wrap justfy-items-center align-content-center">
            <div className="card rounded-0 bg-dark text-white">
              <img
                src={leftbanner}
                className="card-img rounded-0"
                alt="left banner"
              />
              <div className="card-img-overlay ms-2 mt-4 d-flex flex-column justify-content-sm-center align-items-centre">
                <h2 className="card-title fw-bolder text-md-start">We Are</h2>
                <h2 className="card-title mb-3 fw-bolder text-md-start">Shop E-Com</h2>
                <p className="mt-2 card-text text-md-start">
                  Awesome, stylish and latest trends
                </p>
                <button
                  type="button"
                  className="mt-md-4 ms-md-0 align-self-sm-center align-self-md-start p-2 text-md-start text-sm-center rounded-0 btn btn-outline-light"
                >Purchase Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6 pt-4">
                <div className="card bg-dark text-white rounded-0">
                  <img
                    src={grid1}
                    className="card-img rounded-0"
                    alt="left banner"
                  />
                  <div className="card-img-overlay ms-2 mt-5 d-none d-md-block">
                    <h3 className="card-title fw-bolder">Women</h3>
                    <i className="mt-2 card-text text-start">
                      Best Cloths for Women
                    </i>
                  </div>
                  <div className="discover bg-dark card-img-overlay rounded-0">
                    <h3 className="card-title fw-bolder mt-4">Women</h3>
                    <button className="btn btn-outline-light rounded-0">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-4">
                <div className="card bg-dark text-white rounded-0">
                  <img
                    src={grid2}
                    className="card-img rounded-0"
                    alt="left banner"
                  />
                  <div className="card-img-overlay ms-2 mt-5 d-none d-md-block">
                    <h3 className="card-title fw-bolder">Men</h3>
                    <i className="mt-2 card-text text-start">
                      Best Cloths for Men
                    </i>
                  </div>
                  <div className="discover bg-dark card-img-overlay rounded-0">
                    <h3 className="card-title fw-bolder mt-4">Men</h3>
                    <button className="btn btn-outline-light rounded-0">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pt-4">
                <div className="card bg-dark text-white rounded-0">
                  <img
                    src={grid3}
                    className="card-img rounded-0"
                    alt="left banner"
                  />
                  <div className="card-img-overlay ms-2 mt-5 d-none d-md-block">
                    <h3 className="card-title fw-bolder">Kids</h3>
                    <i className="mt-2 card-text text-start">
                      Best Cloths for Kids
                    </i>
                  </div>
                  <div className="discover bg-dark card-img-overlay rounded-0">
                    <h3 className="card-title fw-bolder mt-4">Kids</h3>
                    <button className="btn btn-outline-light rounded-0">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-4">
                <div className="card bg-dark text-white rounded-0">
                  <img
                    src={grid4}
                    className="card-img rounded-0"
                    alt="left banner"
                  />
                  <div className="card-img-overlay ms-2 mt-5 d-none d-md-block">
                    <h3 className="card-title fw-bolder">Accessories</h3>
                    <i className="mt-2 card-text text-start">
                      Trending Accessories
                    </i>
                  </div>
                  <div className="discover bg-dark card-img-overlay rounded-0">
                    <h3 className="card-title fw-bolder mt-4">Trending</h3>
                    <button className="btn btn-outline-light rounded-0">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 hr-home"/>
      <Subscribe />
    </>
  );
}
