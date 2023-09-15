import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import Rating from "../Rating/Rating";

export default function Cart() {
  const cart_data = useSelector((state) => state.ProductsData.cartData);
  console.log(cart_data);
  const increaseQuantityHandler = (id) => {
    // console.log(quantity);
  };
  const total = cart_data.reduce((acc, curr) => acc + curr.price, 0);
  const decreaseQuantityHandler = () => {
    // setQuantity((quantity) => (quantity > 0 ? quantity - 1 : 0));
  };
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4 mt-5">
              <div className="card-header py-3">
                <h5 className="mb-0 text-info">Cart Items</h5>
              </div>
              <div className="card-body">
                {/* <!-- Single item --> */}
                <div className="row">
                  {cart_data.length ? (
                    cart_data.map((product) => (
                      <>
                        <div
                          className="col-lg-3 col-md-12 mb-4 mb-lg-0"
                          key={product.id}
                        >
                          {/* <!-- Image --> */}
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={product.image}
                              className="w-100"
                              alt={product.title}
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                          {/* <!-- Image --> */}
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Data --> */}
                          <p>
                            <strong>{product.title}</strong>
                          </p>
                          <p style={{textAlign:"justify"}}>{product.description}</p>
                          <Rating rating={product.rating.rate} />
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                          {/* <!-- Data --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Quantity --> */}
                          <div
                            className="d-flex mb-4 justify-content-center align-items-center"
                            style={{ maxHeight: "50px" }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={decreaseQuantityHandler}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <fieldset class="border rounded-2 w-25">
                              <legend
                                class="float-none w-auto text-center m-0"
                                style={{ fontSize: "12px" }}
                              >
                                Quantity
                              </legend>
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={product.quantity}
                                type="number"
                                className="form-control border-0 py-0 text-center"
                              />
                            </fieldset>

                            <button
                              className="btn btn-primary px-3 ms-2"
                              onClick={() =>
                                increaseQuantityHandler(product.id)
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          {/* <!-- Quantity --> */}

                          {/* <!-- Price --> */}
                          <p className="text-start text-md-center">
                            <strong>${product.price}</strong>
                          </p>
                          {/* <!-- Price --> */}
                        </div>
                        <hr className="my-4" />
                      </>
                    ))
                  ) : (
                    <h3 className="text-warning">Cart is empty..</h3>
                  )}
                </div>
                {/* <!-- Single item --> */}
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p>
                  <strong>We accept</strong>
                </p>
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                  alt="PayPal acceptance mark"
                />
              </div>
            </div>
          </div>
          {cart_data.length > 0 && (
            <div className="col-md-4 mt-5">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {cart_data.map((product) => (
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        {product.title}
                        <span>${product.price.toFixed(2)}</span>
                      </li>
                    ))}
                    <hr />
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${total}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
