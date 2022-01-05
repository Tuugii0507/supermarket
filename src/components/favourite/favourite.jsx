import React, { useContext } from "react";
import BottomBar from "../bottom-bar/bottom-bar";
import { ShopContext } from "../../provider";

const Favourite = () => {
    const {favoriteItems} = useContext(ShopContext)
  return (
    <div>
      <div style={{ overflow: "scroll" }}>
        <div className="center id9">Favourite</div>
        <div className="id10"></div>
        {favoriteItems.map((el) => {
            return 1;
        })}
        <BottomBar />
      </div>
    </div>
  );
};
export default Favourite;
