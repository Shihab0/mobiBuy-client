import React from "react";
import OurProducts from "../../Products/OurProducts/OurProducts";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import BuySteps from "../BuySteps/BuySteps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurProducts></OurProducts>
      <Advertisement></Advertisement>
      <BuySteps></BuySteps>
    </div>
  );
};

export default Home;
