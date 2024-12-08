import React from "react";
import Navbar from "../../navbar";
import Hero from "../../hero";
import PopulerProducts from "../populerproduct";
import SofaCollection from "../sofacollection";
import NewArrivals from "../newarrivalproduct";
import FeaturedProducts from "../featuredproducts";
import Blog from "../blogsection";
import Clients from "../client";
import LetterFooter from "../newletter";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopulerProducts />
      <NewArrivals />
      <SofaCollection />
      <FeaturedProducts />
      <Blog />
      <Clients />
      <LetterFooter />
    </>
  );
}

export default Home;
