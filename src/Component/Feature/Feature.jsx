import React from "react";
// import image
import EnjoyLogo from "../../Image/Enjoy.PNG";
import OrganicFood from "../../Image/OrganicFood.PNG";
import ReciveOrder from "../../Image/reciveOrder.PNG";
import FreeReturn from "../../Image/FreeReturn.PNG";
// import grid element
import { Grid } from "@material-ui/core";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="feature">
      <div className="container feature--content text-center">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <div className="feature--content--info">
              <img src={ReciveOrder} alt="ReceiveOrder" />
              <h5>Receive your order</h5>
              <p>
                Pesto sauce zucchini jalapenos, halkidiki green olives Cherry
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <div className="feature--content--info">
              <img src={FreeReturn} alt="FreeReturn" />
              <h5>Free Returns</h5>
              <p>
                Pesto sauce zucchini jalapenos, halkidiki green olives Cherry
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <div className="feature--content--info">
              <img src={OrganicFood} alt="OrganicFood" />
              <h5>100% Organic Food Returns</h5>
              <p>
                Pesto sauce zucchini jalapenos, halkidiki green olives Cherry
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <div className="feature--content--info">
              <img src={EnjoyLogo} alt="EnjoyLogo" />
              <h5>Enjoy!</h5>
              <p>
                Pesto sauce zucchini jalapenos, halkidiki green olives Cherry
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Feature;
