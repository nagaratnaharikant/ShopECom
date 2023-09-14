import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../backend-firebase/src/firebase";
import { onValue, ref } from "firebase/database";
import './ProductDetails.css';
import Rating from "../../Rating/Rating";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  

  useEffect(() => {
    const getProduct = async () => {
      const res = await ref(db, "products/" + (id - 1));
  
      await onValue(res, (snapshot) => {
        const product = snapshot.val();
        // Do something with the user data.
        if (snapshot.exists()) {
          console.log(product);
          setProduct(product);
        }
      });
    };
    getProduct();
  }, [id]);

  return (
    <>
      {product && <div class="card product-det">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={product.image} class="img-fluid rounded-start" alt={product.title} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">
                {product.description}
              </p>
              <p class="card-text">
                ${product.price}
              </p>
              <Rating rating={product.rating.rate} />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}
