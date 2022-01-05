import React, { useContext } from "react";
import Search from "./search";
import Location from "./location";
import Advertising from "./advertising";
import ExclusiveOffer from "../Exclusive Offer/exclusiveOffer";
import Card from "../cards";
import BestSelling from "../Best Selling/bestSelling";
import Groceries from "../Groceries/groceries";
import Option from "../Groceries/option";
import BottomBar from "../bottom-bar/bottom-bar";
import { ShopContext } from "../../provider";

const Market = () => {
  const { products } = useContext(ShopContext);
  return (
    <div>
      <div>
        <div className="colimn">
          <div className="handsomecarrot"></div>
          <Location />
          <Search />
          <Advertising />
          <ExclusiveOffer />
          <div
            className="row"
            style={{ marginLeft: "2vw", marginTop: "2vh", overflow: "scroll" }}
          >
            {products.map((el) => {
              return <Card name={el.name} limit={el.size} price={el.price} available={el.available} bg={el.bg}/>;
            })}
          </div>
          <BestSelling />
          <div
            className="row"
            style={{ marginLeft: "2vw", marginTop: "2vh", overflow: "scroll" }}
          >
            {products.map((el) => {
              return <Card name={el.name} limit={el.size} price={el.price} available={el.available} bg={el.bg}/>;
            })}
          </div>
          <Groceries />
          <div
            className="row"
            style={{ marginTop: "3vh", marginLeft: "2vw", overflow: "scroll" }}
          >
            <Option bg="#F8A44C" name="Pulses" />
            <Option bg="#53B175" name="Rice" />
            <Option bg="rgba(183, 223, 245)" name="Beverages" />
          </div>
          <div
            className="row"
            style={{
              marginLeft: "2vw",
              marginTop: "2vh",
              overflow: "scroll",
              paddingBottom: "8.5vh",
            }}
          >
            {products.map((el) => {
              return (
                <Card
                  name={el.name}
                  limit={el.size}
                  price={el.price}
                  available={el.available}
                  bg={el.bg}
                />
              );
            })}
          </div>
          <BottomBar />
        </div>
      </div>
    </div>
  );
};
export default Market;
