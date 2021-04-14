import React from "react";
import Grid from "@material-ui/core/Grid";
import customInstruction from "./instruction.style";
import CustomTypography from "../../components/Typography/typography";

function Instruction()
{
  const classes = customInstruction();
  return (
    <div className={classes.instruction}>
      <div className={classes.container}>
        <Grid container spacing={2} justify="center">
          <Grid item md={4} xs={12}>
            <div className={classes.block}>
              <h2 className={classes.headline2}>Buying On ProjectX</h2>
            </div>
            <div className={classes.description}>
              We don’t determine the price, you do. As a live marketplace,
              ProjectX empowers you to Bid and Buy at real-time prices that
              reflect the current demand.
            </div>
            <CustomTypography
              className={classes.link}
              href="https://stockx.com/about/buying/"
              color="#08a05c"
              txtComponent="a"
              txtStyle="text--link"
              txtType="text--bold"
            >
              Learn More About Buying
              <span className={classes.plus}>+++++</span>
            </CustomTypography>
          </Grid>
          <Grid item md={4} xs={12}>
            <CustomTypography
              txtComponent="h2"
              txtType="text--bold"
              txtStyle="txt--heading"
              className={classes.headline}
            >
              The Powers In Your Hand
            </CustomTypography>
            <div className={classes.image}>
              <img
                className={classes.button}
                alt="button"
                src="https://stockx.com/about/wp-content/uploads/2020/12/grid-buttons-2.gif"
              />
              <img
                className={classes.clutch}
                alt="clutch"
                src="https://stockx.com/about/wp-content/uploads/2020/12/clutch.png"
              />
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={classes.block}>
              <h2 className={classes.headline2}>Selling on ProjectX</h2>
              <div className={classes.description}>
                Whether you’re looking to make quick cash or start a reselling
                business, we have the tools to help you succeed.
              </div>
              <CustomTypography
                className={classes.link}
                href="https://stockx.com/about/buying/"
                color="#08a05c"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--bold"
              >
                Learn More About Buying
                <span className={classes.plus}>+++++</span>
              </CustomTypography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Instruction;
