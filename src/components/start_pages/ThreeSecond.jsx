import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "../account/account";
import Cardssss from "../card/cardssss";
import BreadCards from "../explore/bread_cards";
import DrinkCards from "../explore/drink_cards";
import Explore from "../explore/explore";
import ExploreCards from "../explore/explore_fruit";
import MeatCards from "../explore/meat_cards";
import MilkCards from "../explore/milk_cards";
import OilCards from "../explore/oil_cards";
import Favourite from "../favourite/favourite";
import Market from "../homeScreen/market";
import Nectar from "./nectar";
import See from "./see";
import Welcome from "./welcome";

const ThreeSecond = () => {
    return <div>
    <Router>
        <Routes>
          <Route path="/" exact element={<Nectar/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>
          <Route path="/market" element={<Market/>}></Route>
          <Route path="/explore" element={<Explore/>}></Route>
          <Route path="/favourite" element={<Favourite/>}></Route>
          <Route path="/card" element={<Cardssss/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/explore_fruit" element={<ExploreCards/>}></Route>
          <Route path="/oil_cards" element={<OilCards/>}></Route>
          <Route path="/meat_cards" element={<MeatCards/>}></Route>
          <Route path="/bread_cards" element={<BreadCards/>}></Route>
          <Route path="/milk_cards" element={<MilkCards/>}></Route>
          <Route path="/drink_cards" element={<DrinkCards/>}></Route>
          <Route path="/see/:data" element={<See/>}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </Router>
    </div>
    
}
export default ThreeSecond;