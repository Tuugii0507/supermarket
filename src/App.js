import React from "react";
import "./App.css";
import ThreeSecond from "./components/start_pages/ThreeSecond";
import { ShopProvider } from "./provider";

function App() {
  return (
    <div>
      <ShopProvider>
        <ThreeSecond />
      </ShopProvider>
    </div>
  );
}

export default App;
