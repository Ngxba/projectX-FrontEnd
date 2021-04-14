import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import customFAQs from "./FAQs.style";
import CustomTypography from "../../components/Typography/typography";

function FAQs()
{
  const classes = customFAQs();
  return (
    <section className={classes.FAQs}>
      <Container>
        <div className={classes.container}>
          <h2 className={classes.headline}>FAQs</h2>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.question}>
              <CustomTypography
                href="https://help.stockx.com/s/article/What-is-a-Bid-and-how-do-I-buy-on-StockX"
                color="white"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
              >
                What is a Bid, how do I buy on ProjectX?
              </CustomTypography>
              <span className={classes.icon}>
                <ArrowForwardOutlinedIcon />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.question}>
              <CustomTypography
                href="https://help.stockx.com/s/article/What-is-an-Ask-and-how-do-I-sell-on-StockX"
                color="white"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
              >
                What is an Ask, how do I sell on ProjectX?
              </CustomTypography>
              <span className={classes.icon}>
                <ArrowForwardOutlinedIcon />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.question}>
              <CustomTypography
                href="https://help.stockx.com/s/article/How-long-does-it-take-to-receive-my-order"
                color="white"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
              >
                How long does it take to receive my order?
              </CustomTypography>
              <span className={classes.icon}>
                <ArrowForwardOutlinedIcon />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.question}>
              <CustomTypography
                href="https://help.stockx.com/s/article/What-form-of-payment-does-StockX-accept"
                color="white"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
              >
                What form of payment does ProjectX accept?
              </CustomTypography>
              <span className={classes.icon}>
                <ArrowForwardOutlinedIcon />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.question}>
              <CustomTypography
                href="https://help.stockx.com/s/article/My-BidAsk-just-got-accepted-Can-I-cancel-it"
                color="white"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
              >
                My Bid/Ask just got accepted. Can I cancel it?
              </CustomTypography>
              <span className={classes.icon}>
                <ArrowForwardOutlinedIcon />
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.question}>
              <CustomTypography
                href="https://help.stockx.com/s/article/How-do-I-contact-customer-service-and-when-can-I-expect-to-hear-back"
                color="white"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--light"
              >
                How do I contact customer service and when can I expect to hear
                back?
              </CustomTypography>
              <span className={classes.icon}>
                <ArrowForwardOutlinedIcon />
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
    </section>
  );
}

export default FAQs;
