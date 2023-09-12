import React, { useEffect, useState } from "react";
import "./Products.css";
import { db } from "../../../backend-firebase/src/firebase";
import {
  limitToFirst,
  onValue,
  orderByValue,
  query,
  ref,
  startAt,
} from "firebase/database";
import Rating from "../../Rating/Rating";
import Pagination from "../../pagination/Pagination";
import { Link, useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      console.log(pageNo);
      let end = pageNo * 6;
      let start = end - 6;
      const res = ref(db, "products");
      const filtered = query(
        res,
        orderByValue("id"),
        startAt(start),
        limitToFirst(end)
      );
      await onValue(res, (snapshot) => {
        const totalItems = snapshot.val().length;
        if (snapshot.exists()) {
          setTotalPages(totalItems);
        }
      });
      await onValue(filtered, (snapshot) => {
        const data = snapshot.val();
        let res = data.filter((ele) => ele.id >= start && ele.id < end);
        console.log(res);
        if (snapshot.exists()) {
          setProducts(res);
        }
      });
    };
    getProducts();
  }, [pageNo, products]);

  const newProductHandler = () => {
    navigate("/newProduct");
  };
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading mb-3">
              <h2 className="text-center">Our Latest Products</h2>
              <p className="fst-italic text-muted text-center">
                Check out all of our products.
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary mb-4 ml-auto"
          onClick={newProductHandler}
          type="submit"
        >
          Add Product
        </button>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 product" key={product.id}>
              <div className="card mb-4 border-0 w-85">
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bolder p-0">{product.title}</h5>
                  <h6 className="text-muted">${product.price}</h6>
                  <Rating rating={product.rating.rate} />
                </div>
                <div className="navbar navbar-expand-lg navbar-light card-img-overlay">
                  <ul className="navbar-nav mt-custom mx-auto">
                    <li className="nav-item m-2 p-2">
                      <Link className="nav-link" to="/productDetail">
                        <i className="fa fa-eye"></i>
                      </Link>
                    </li>
                    <li className="nav-item m-2 p-2">
                      <Link className="nav-link" to="/productDetail">
                        <i className="fa fa-star"></i>
                      </Link>
                    </li>
                    <li className="nav-item m-2 p-2">
                      <Link to="/productDetail" className="nav-link">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination length={totalPages} updatePageNum={setPageNo} />
      </div>
    </>
  );
}
