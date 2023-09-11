import React, { useEffect } from "react";
import "./Rating.css";

export default function Rating(props) {
  let rating = props.rating;
  const starPercentage = (rating / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <>
      <span className="text-muted">Rating: </span>
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
      </div>
    </>
  );
}
