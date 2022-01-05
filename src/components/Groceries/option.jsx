import React from "react";

const Option = ({ bg = "gray", name }) => {
  return (
    <div>
      <div className="option" style={{ backgroundColor: bg }}>
        <div className="row center">
          <div className="maybrRice" style={{marginTop:"3vh"}}></div>
          <div style={{fontFamily:"Pacifico, cursive", fontSize:"6vw"}}>{name}</div>
        </div>
      </div>
    </div>
  );
};
export default Option;
