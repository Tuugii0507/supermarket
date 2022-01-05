import React from "react";
import BottomBar from "../bottom-bar/bottom-bar";
import Search from "../homeScreen/search";
import { Link } from "react-router-dom";

const Explore = () => {
    return <div>
        <div className="biMedku">Find Products</div>
        <Search />
        <div className="column">
            <div className="row">
                <Link to="/explore_fruit">
                    <button className="IDKoptions" style={{ backgroundColor: "rgba(83, 177, 117, 0.3)", border: "1px solid green" }}>
                        <div>
                            <div className="fruit"></div>
                            <div className="littleTitle">Frash Fruits
                                & Vegetable</div>
                        </div>
                    </button>
                </Link>
                <Link to="/oil_cards">
                    <button className="IDKoptions" style={{ backgroundColor: "rgba(248, 164, 76, 0.1)", border: "1px solid orange" }}>
                        <div>
                            <div className="oil"></div>
                            <div className="littleTitle">Cooking Oil & Ghee</div>
                        </div>
                    </button>
                </Link>
            </div>
            <div className="row">
                <Link to="/meat_cards">
                    <button className="IDKoptions" style={{ backgroundColor: "rgba(247, 165, 147, 0.25)", border: "1px solid #F7A593" }}>
                        <div>
                            <div className="meat"></div>
                            <div className="littleTitle">Meat & Fish</div>
                        </div>
                    </button>
                </Link>
                <Link to="/bread_cards">
                    <button className="IDKoptions" style={{ backgroundColor: "rgba(211, 176, 224, 0.25)", border: "1px solid #D3B0E0" }}>
                        <div>
                            <div className="bread"></div>
                            <div className="littleTitle">Bakery & Snacks</div>
                        </div>
                    </button>
                </Link>
            </div>
            <div className="row">
                <Link to="/milk_cards">
                    <button className="IDKoptions" style={{ backgroundColor: "rgba(253, 229, 152, 0.25)", border: "1px solid #FDE598" }}>
                        <div>
                            <div className="milk"></div>
                            <div className="littleTitle">Dairy & Eggs</div>
                        </div>
                    </button>
                </Link>
                <Link to="/drink_cards">
                    <button className="IDKoptions" style={{ backgroundColor: "rgba(183, 223, 245, 0.25)", border: "1px solid #B7DFF5" }}>
                        <div>
                            <div className="drink"></div>
                            <div className="littleTitle">Beverages</div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
        <BottomBar />
    </div>
}
export default Explore