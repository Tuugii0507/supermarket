import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

const Welcome = () => {
    return (
        <div className="welcome">
            <div style={{marginTop:"48vh"}}>
            <div className="carrot"></div>
            <Link to="/market">
                <button className="welcomeButton">Get Started</button>
            </Link>
            </div>
        </div>
    )
}
export default Welcome;