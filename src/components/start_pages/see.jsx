import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../../provider";
const See = () => {
  const navigate = useNavigate();
  const { data } = useParams();
  const [heart, setHeart] = useState(false);
  const [number, setNumber] = useState(1);
  const {addFavItem, favoriteItems} = useContext(ShopContext)
  let red = () => {
    setHeart(!heart);
  };
  const hasah = () => {
    if (number < 2) {
      return 1;
    }
    setNumber(number - 1);
  };
  const nemeh = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <div className="row" style={{ marginTop: "2vh", marginLeft: "5vw" }}>
        <div className="deedTaliinArrow" onClick={() => navigate(-1)}></div>
        <div className="dumbbutton" style={{ marginLeft: "80vw" }}></div>
      </div>
      <div className="see_photo"></div>
      {/* style={{ backgroundImage: `url(${data.split(":")[5]})`}} */}
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="column" style={{ width: "100%" }}>
          <div className="row id3">
            <div>{data.split(":")[1]}</div>
            {heart === false ? (
              <div
                className="heart"
                style={{ marginRight: "5vw" }}
                onClick={red}
              ></div>
            ) : (
              <div
                className="redHeart"
                style={{ marginRight: "5vw" }}
                onClick={() => addFavItem({heart})}
                onClick={red}
              ></div>
            )}
          </div>
          <div className="row">
            <div
              style={{
                fontSize: "4.5vw",
                marginLeft: "5vw",
                marginTop: "1vh",
                color: "gray",
              }}
            >
              {data.split(":")[2]}, Price
            </div>
          </div>
        </div>
      </div>
      <div className="row id2">
        <div className="row">
          <button onClick={hasah} className="id1">
            -
          </button>
          <div style={{ fontSize: "7vw", marginLeft: "3vw" }}>{number}</div>
          <button style={{ marginLeft: "3vw" }} onClick={nemeh} className="id1">
            +
          </button>
        </div>
        <div style={{ fontSize: "7vw", marginRight: "5vw" }}>
          ₮{number * data.split(":")[3]}
        </div>
      </div>
      <div className="id4"></div>
      <div className="column">
        <div className="id5">Product Detail</div>
        <div className="id6">Size : {data.split(":")[2]}</div>
      </div>
      <div className="id4"></div>
      <div className="row space-between">
        <div className="id5">Available</div>
        <div className="id7">{data.split(":")[4]}</div>
      </div>
      <div className="id4"></div>
      <div className="column">
        <div className="id5">Review</div>
        <Link to="/card">
        <button className="id8 center">Add To Basket</button>
        </Link>
      </div>
    </div>
  );
};
export default See;
