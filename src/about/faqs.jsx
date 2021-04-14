import React from "react";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import customFAQs from "./FAQs.style";
import CustomTypography from "../components/Typography/typography";

function FAQs() {
  const classes = customFAQs();
  return (
    <section className={classes.FAQs}>
      <div className={classes.container}>
        <h2 className={classes.headline}>FAQs</h2>
      </div>
      <div className={classes.wrapper}>
        <CustomTypography
          className={classes.question}
          href="https://help.stockx.com/s/article/What-is-a-Bid-and-how-do-I-buy-on-StockX"
          color="white"
          txtComponent="a"
          txtStyle="text--link"
          txtType="text--light"
        >
          <p>What is a Bid, how do I buy on StockX?</p>
          <span className={classes.icon}>
            <ArrowForwardOutlinedIcon />
          </span>
        </CustomTypography>
        <CustomTypography
          className={classes.question}
          href="https://help.stockx.com/s/article/What-is-an-Ask-and-how-do-I-sell-on-StockX"
          color="white"
          txtComponent="a"
          txtStyle="text--link"
          txtType="text--light"
        >
          <p>What is an Ask, how do I sell on StockX?</p>
          <span className={classes.icon}>
            <ArrowForwardOutlinedIcon />
          </span>
        </CustomTypography>
        <CustomTypography
          className={classes.question}
          href="https://help.stockx.com/s/article/How-long-does-it-take-to-receive-my-order"
          color="white"
          txtComponent="a"
          txtStyle="text--link"
          txtType="text--light"
        >
          <p>How long does it take to receive my order?</p>
          <span className={classes.icon}>
            <ArrowForwardOutlinedIcon />
          </span>
        </CustomTypography>
        <CustomTypography
          className={classes.question}
          href="https://help.stockx.com/s/article/What-form-of-payment-does-StockX-accept"
          color="white"
          txtComponent="a"
          txtStyle="text--link"
          txtType="text--light"
        >
          <p>What form of payment does StockX accept?</p>
          <span className={classes.icon}>
            <ArrowForwardOutlinedIcon />
          </span>
        </CustomTypography>
        <CustomTypography
          className={classes.question}
          href="https://help.stockx.com/s/article/My-BidAsk-just-got-accepted-Can-I-cancel-it"
          color="white"
          txtComponent="a"
          txtStyle="text--link"
          txtType="text--light"
        >
          <p>My Bid/Ask just got accepted. Can I cancel it?</p>
          <span className={classes.icon}>
            <ArrowForwardOutlinedIcon />
          </span>
        </CustomTypography>
        <CustomTypography
          className={classes.question}
          href="https://help.stockx.com/s/article/How-do-I-contact-customer-service-and-when-can-I-expect-to-hear-back"
          color="white"
          txtComponent="a"
          txtStyle="text--link"
          txtType="text--light"
        >
          <p>
            How do I contact customer service and when can I expect to hear
            back?
          </p>
          <span className={classes.icon}>
            <ArrowForwardOutlinedIcon />
          </span>
        </CustomTypography>
      </div>
    </section>
  );
}

export default FAQs;
