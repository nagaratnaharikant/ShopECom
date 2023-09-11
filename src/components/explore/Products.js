import React, { useEffect, useState } from "react";
import "./Products.css";
import { db } from "../../backend-firebase/src/firebase";
import {
  endAt,
  limitToFirst,
  limitToLast,
  onValue,
  orderByValue,
  query,
  ref,
  startAt,
} from "firebase/database";
import Rating from "../Rating/Rating";
import Pagination from "../pagination/Pagination";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
      let res = data.filter(ele => ele.id >= start && ele.id < end);
      console.log(res);
      if (snapshot.exists()) {
        setProducts(res);
      }
    });
  };
  useEffect(() => {
    getProducts();
  }, [pageNo]);

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading mb-3">
              <h2>Our Latest Products</h2>
              <span className="fst-italic text-muted">
                Check out all of our products.
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
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
              </div>
            </div>
          ))}
        </div>
        <Pagination length={totalPages} updatePageNum={setPageNo} />
      </div>
    </>
  );
}
