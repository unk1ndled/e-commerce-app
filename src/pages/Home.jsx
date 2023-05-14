import React from "react";
import Navbar from "../components/Navbar";
import TextBar from "../components/TextBar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";


const Home = () => {
  return (
    <div>
      <Navbar />
      <TextBar text ="EXCLUSIVE !!!  buy 10 receive 1 tux for FREE" size="25px"/>
      <Categories/>
      
      <Slider/>
      <TextBar text ="OUR POPULAR ITEMS" size="40px"/>
      <Products/>
    </div>
  );
};

export default Home;
