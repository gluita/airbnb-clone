import React from "react";

function Cards({ img }) {
  return (
    <div className="hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="relative h-60 w-60 ">
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <p>Explore</p>
    </div>
  );
}

export default Cards;
