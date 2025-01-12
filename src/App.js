// import logo from './logo.svg';
import React, { use, useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Jewelery from "./Jewelery";
import Electronics from "./Electronics";
import MensClothes from "./MensClothes";
import WomensClothes from "./WomensClothes";
import Head from './Head';
import axios from "axios";
import Home from "./Home";

//const API_URL = 'https://fakestoreapi.com/products';
// export const getProducts = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// };

function App() {

  return (
    <div className="ShoppingApp">
    <BrowserRouter>
    <Head/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/mensClothes" element={<MensClothes />} />
      <Route path="/womensClothes" element={<WomensClothes />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;