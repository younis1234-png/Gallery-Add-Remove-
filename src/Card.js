import React from "react";

const Card = ({ images }) => {
  return (
    <>
      {images.map((img, index) => (
        <div
          key={index}
          style={{ background: `url("${img.url}") no-repeat center/cover` }}
          className="card"
        ></div>
      ))}
    </>
  );
};

export default Card;
