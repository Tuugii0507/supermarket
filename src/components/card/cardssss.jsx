import React, { useContext } from "react";
import { ShopContext } from "../../provider";
import BottomBar from "../bottom-bar/bottom-bar";
import CreditCard from "./card";

const Cardssss = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <div style={{ overflow: "scroll" }}>
        <div className="center id9">My Card</div>
        <div className="id10"></div>
        {cartItems.map((el) => (
          <CreditCard el={el} />
        ))}
        <BottomBar />
      </div>
    </div>
  );
};
export default Cardssss;
