import React, { useState } from "react";

export default function Pagination(props) {

  let pages = Array.from({ length: props.length / 6 }, (x, i) => i + 1);
  console.log(props);
  return (
    <>
      {pages.map((page) => (
        <button
          key={page}
          className="btn btn-warning ms-1"
          onClick={() => props.updatePageNum(page)}
        >
          {page}
        </button>
      ))}
    </>
  );
}
