import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import NavigationBar from "../components/NavigationBar";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/Shopping-cart">
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
