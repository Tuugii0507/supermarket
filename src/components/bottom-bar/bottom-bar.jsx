import React from "react";
import { Link } from "react-router-dom";

const BottomBar = () => {
    return <div>
        <div className="bottom-bar">
            <div className="row space-around">
                <Link to="/market">
                <button className="shop-button"></button>
                </Link>
                <Link to="/explore">
                    <button className="explore-button"></button>
                </Link>
                <Link to="/card">
                <button className="card-button"></button>
                </Link>
                <Link to="/favourite">
                <button className="favourite-button"></button>
                </Link>
                <Link to="/account">
                <button className="account-button"></button>
                </Link>
                
            </div>
        </div>
    </div>
}
export default BottomBar;