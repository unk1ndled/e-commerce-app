import React from "react";
import TextBar from "../components/TextBar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import {Footer} from "../components/Footer"

const Home = () => {
  return (
    <div>
      <TextBar text ="EXCLUSIVE !!!  buy 10 receive 1 tux for FREE" size="25px"/>
      <Categories/>
      <Slider/>
      <TextBar text ="OUR POPULAR ITEMS" size="40px"/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
