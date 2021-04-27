import { Grid } from "@material-ui/core";
import React from "react";
// import css
import "./Product.scss";
// import product image
import product1 from "../../Image/product1.PNG";
import product2 from "../../Image/product2.PNG";
import product3 from "../../Image/product3.PNG";
import product4 from "../../Image/product4.PNG";
import product5 from "../../Image/product5.PNG";
import product6 from "../../Image/product6.PNG";
import product7 from "../../Image/product7.PNG";
import product8 from "../../Image/product8.PNG";
// import icon
import { IoStar, IoStarHalfOutline } from "react-icons/io5";
const Product = () => {
  // fake data
  const product = [
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product1 },
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product2 },
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product3 },
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product4 },
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product5 },
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product6 },
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product7 },
    { title: "Solid Basic Jumpsuit", price: "11.05", img: product8 },
  ];
  return (
    <div className="product">
      <div className="product-text">
        <h2>Fresh Products</h2>
        <p>We provide fresh and health food service</p>
      </div>
      <div className="container product--content">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {product.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <div className="product--content--card">
                <img src={data.img} alt="" />
                <div>
                  <IoStar /> <IoStar />
                  <IoStar /> <IoStarHalfOutline />
                </div>
                <h4>{data.title}</h4>
                <p>£{data.price}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Product;
