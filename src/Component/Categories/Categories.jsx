import { Grid } from "@material-ui/core";
import React from "react";
import "./CategoriesStyle.scss";
const Categories = () => {
  const data = [
    {
      img:
        "https://image.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg",
      title: "Malta Slices",
      product: "17",
    },
    {
      img:
        "https://image.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg",
      title: "Mixed Food",
      product: "17",
    },
    {
      img:
        "https://image.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg",
      title: "Orange Juice",
      product: "17",
    },
    {
      img:
        "https://image.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg",
      title: "Special Apple",
      product: "17",
    },
    {
      img:
        "https://image.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg",
      title: "Strawburry",
      product: "17",
    },
    {
      img:
        "https://image.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg",
      title: "Vegetables",
      product: "17",
    },
  ];
  return (
    <div className="Categories">
      <div className="Categories-text">
        <h2>Popular Categories</h2>
        <p>Add Popular Categories to weekly line up</p>
      </div>
      <div className="Categories--content container">
        <Grid
          container
          direction="row"
          // justify="center"
          alignItems="center"
          spacing={3}
        >
          {data.map((data, i) => (
            <Grid key={i} item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="Categories--content--card">
                <img src={data.img} alt="productImage" />
                <div className="Categories--content--card--textContent">
                  <h6>{data.title}</h6>
                  <p>{data.product} Products</p>
                  <button>Shop Now</button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Categories;
