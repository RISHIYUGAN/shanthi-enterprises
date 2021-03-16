import React from "react";
import Home from "../Home/Home";
import { Header } from "../Header/Header";
import { OurStory } from "../about/about";
// import { Portfolio } from "./portfolio/portfolio";
// import { Team } from "./team/team";
// import { Blog } from "./blog/blog";
import { Products } from "../Products/products";
import { Brands } from "../brands/brands";
import { Manufactures } from "../manufacturers/manufactures";
import { Contact } from "../contact/contact";

export const Homepage = () => {
  return (
    <div style={{maxWidth:"100vw"}}>
      <Header />
      <Home />
      <OurStory />
      <Products />
      <Manufactures />
      {/* <Brands /> */}
      <Contact />
    </div>
  );
};
