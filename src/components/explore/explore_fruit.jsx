import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../provider/data";
import Card from "../cards";

const ExploreCards = () => {
  return (
    <div>
      <div
        className="row"
        style={{
          marginTop: "2vh",
          marginLeft: "3vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/explore">
          <div className="deedTaliinArrow"></div>
        </Link>
        Frash Fruits & Vegetable
        <div className="medkueee"></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingBottom: "2vh",
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
              style={{ marginTop: "2vh", marginLeft: "3vw" }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ExploreCards;
