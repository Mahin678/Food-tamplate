import React from "react";
import Categories from "../Categories/Categories";
import Feature from "../Feature/Feature";
import Header from "../Header/Header";
import Product from "../Product/Product";
const Home = () => {
  return (
    <>
      <Header />
      <Feature />
      <Categories />
      <Product />
    </>
  );
};

export default Home;
