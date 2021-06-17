import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import customContainer from "./background.style";
import CustomTypography from "../../components/Typography/typography";

function SimpleContainer()
{
  const classes = customContainer();
  return (
    <React.Fragment key="about">
      <div maxWidth="sm" className={classes.container}>
        <Container>
          <Grid container spacing={0} justify="center">
            <Grid item md={6} xs={12} style={{ paddingRight: "10%" }}>
              <div className={classes.content}>
                <h1 className={`${classes.header} ${classes.headline}`}>
                  The Current Culture Marketplace
                </h1>
                <div className={classes.description}>
                  Our mission is to provide access to the world’s most coveted
                  items in the smartest way possible. Buy and sell the hottest
                  sneakers, apparel, electronics, collectibles, trading cards
                  and accessories.
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.media}>
                <div className={classes.img1}>
                  <img
                    className={classes.shoe}
                    alt="shoe"
                    src="https://stockx.com/about/wp-content/uploads/2021/01/2020_01_08_Site_Headers0239-1200x900-1-1200x900.jpg"
                  />
                </div>
                <div className={classes.img2}>
                  <img
                    className={classes.dot}
                    alt="dot"
                    src="https://stockx.com/about/wp-content/uploads/2020/11/triangle-graph.png"
                  />
                </div>
              </div>
            </Grid>
            <Grid className={classes.textCenter} item md={3} xs={12}>
              <CustomTypography
                className={`${classes.action} ${classes.btn}`}
                href="https://stockx.com/about/authentication/"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
                color="white"
              >
                Authentication
                <span className={classes.plus}>+ + + + +</span>
              </CustomTypography>
            </Grid>
            <Grid className={classes.textCenter} item md={3} xs={12}>
              <CustomTypography
                className={`${classes.action} ${classes.btn}`}
                href="https://stockx.com/about/buying/"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
                color="white"
              >
                Buyers
                <span className={classes.plus}>+ + + + +</span>
              </CustomTypography>
            </Grid>
            <Grid className={classes.textCenter} item md={3} xs={12}>
              <CustomTypography
                className={`${classes.action} ${classes.btn}`}
                href="https://stockx.com/about/selling/"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
                color="white"
              >
                Sellers
                <span className={classes.plus}>+ + + + +</span>
              </CustomTypography>
            </Grid>
            {/* </div> */}
          </Grid>
          {/* <Grid container spacing={1} className={classes.span}>
        </Grid> */}
        </Container>
      </div>
    </React.Fragment>
  );
}
export default SimpleContainer;
