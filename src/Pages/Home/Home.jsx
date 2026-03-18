import React from "react";
import Hero from "../../Components/Header/Hero";
import Banner from "../../Components/Banner/Banner";
import TrendingApps from "../../Components/TrandingApp/TrendingApps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <TrendingApps />
    </div>
  );
};

export default Home;
