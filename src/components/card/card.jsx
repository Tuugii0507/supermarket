import React, { useState } from "react";
import BottomBar from "../bottom-bar/bottom-bar";

const CreditCard = ({el}) => {
  console.log(el)
  const [number, setNumber] = useState(1);
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
      <div className="column">
        <div>
          <div className="row">
            <div className="id11" style={{backgroundImage:`url(${el.bg})`}}></div>
            <div className="column">
              <div className="id12">{el.name}</div>
              <div className="id13">{el.limit}, price</div>
              <div className="row id2">
                <div className="row">
                  <button onClick={hasah} className="id14">
                    -
                  </button>
                  <div style={{ fontSize: "7vw", marginLeft: "3vw" }}>
                    {number}
                  </div>
                  <button
                    style={{ marginLeft: "3vw" }}
                    onClick={nemeh}
                    className="id14"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="id15">x</div>
              <div className="id16">{number * el.price}</div>
            </div>
          </div>
          <div className="id4"></div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
export default CreditCard;
