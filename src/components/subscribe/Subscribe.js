import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Subscribe() {
  return (
    <>
      <div className="subscribe">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="section-heading">
                <h2 className="fw-bolder text-start">
                  By Subscribing To Our Newsletter You Can Get 30% Off
                </h2>
                <p className="text-grey text-start">
                  Details to details is what makes shp e-com different from the
                  other ecommerce.
                </p>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="row">
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control rounded-0"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control rounded-0"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                  <div className="col-md-2">
                    <button
                      type="submit"
                      id="form-submit"
                      className="btn btn-dark"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      Store Location:
                      <br />
                      <span>Sunny Isles Beach, FL 33160, United States</span>
                    </li>
                    <li>
                      Phone:
                      <br />
                      <span>010-020-0340</span>
                    </li>
                    <li>
                      Office Location:
                      <br />
                      <span>North Miami Beach</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Work Hours:
                      <br />
                      <span>07:30 AM - 9:30 PM Daily</span>
                    </li>
                    <li>
                      Email:
                      <br />
                      <span>info@company.com</span>
                    </li>
                    <li>
                      Social Media:
                      <br />
                      <span>
                        <a href="#">Facebook</a>, <a href="#">Instagram</a>,{" "}
                        <a href="#">Behance</a>, <a href="#">Linkedin</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
