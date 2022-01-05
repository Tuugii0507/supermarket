import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../provider";

const Card = ({ name, limit, price, bg, available, ...props }) => {
const {addCartItem, cartItems} = useContext(ShopContext)
  return (
    <div {...props}>
      <div className="card">
        <Link to={`/see/:${name}:${limit}:${price}:${available}`}>
        {/* :${bg} */}
          <div
            className="cardsPhoto"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </Link>
        <div
          style={{
            fontSize: "5vw",
            marginLeft: "3vw",
            width: "30vw",
            height: "5vh",
          }}
        >
          {name}
        </div>
        <div style={{ color: "gray", marginLeft: "3vw", marginTop: "1vh" }}>
          {limit}, Priceg
        </div>
        <div className="row space-around center" style={{ marginTop: "0.2vh" }}>
          <div style={{ fontSize: "5vw" }}>{price}₮</div>
          <button onClick={() => addCartItem({name, limit, price, bg})} className="kol">➕</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
