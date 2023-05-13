import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import SliderUpdated from "../components/SliderUpdated";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement/>
      <SliderUpdated/>
    </div>
  );
};

export default Home;
