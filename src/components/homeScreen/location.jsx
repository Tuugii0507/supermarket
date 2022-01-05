import React from "react";

const Location = ({location="Mongolia, UB"}) => {
    return <div>
        <div className="row">
        <div className="location"></div>
        <div className="loname">{location}</div>
        </div>
    </div>
}
export default Location