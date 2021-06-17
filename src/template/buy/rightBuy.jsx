/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import buyStyle from "./buy.style";
import CustomTypography from "../../components/Typography/typography";
import CustomButton from "../../components/Buttons/button";

const RightBuy = ({ quantity, price, size /* , urlKey */ }) =>
{
  const classes = buyStyle();
  return (
    <div className={`${classes.rootPart} ${classes.bgGray}`}>
      <div className={classes.alarm}>
        <AccessAlarmIcon />
        <CustomTypography fontSize="14px" style={{ marginLeft: "5px" }}>
          Only {quantity} left in this size
        </CustomTypography>
      </div>
      {/* <Link to={`/product/${urlKey}`} style={{ textDecoration: "none", width: "100%" }}> */}
      <Button
        variant="outlined"
        color="secondary"
        className={classes.buttonChoose}
      >
        <strong>U.S. Men&apos;s Size {size}</strong>
        <EditIcon fontSize="small" color="disabled" />
      </Button>
      {/* </Link> */}
      <Paper style={{ background: "white", padding: "20px", width: "100%" }}>
        <div className={classes.textCenter}>
          <CustomButton style={{ borderRadius: "30px", padding: "10px 40px" }}>
            BUY IT NOW
          </CustomButton>
        </div>
        <br />
        <div
          style={{ display: "flex", padding: "0 30px", alignItems: "center" }}
          className={classes.textCenter}
        >
          <CustomTypography
            fontSize="2rem"
            txtType="text--bold"
            style={{ flexGrow: "1" }}
            className={classes.textCenter}
          >
            $
          </CustomTypography>
          <TextField
            style={{ flexGrow: "4" }}
            id="outlined-basic"
            label={price}
            variant="outlined"
            disabled
          />
        </div>
        <br />
        <CustomTypography
          fontSize="12px"
          color="#999999"
          txtType="text--light"
          className={classes.textCenter}
        >
          You are about to purchase this product at the lowest Ask price
        </CustomTypography>
        <br />
        <br />
        <div style={{ padding: "0 20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
            }}
          >
            <span style={{ display: "flex" }}>
              <CustomTypography txtType="text--light" txtComponent="h3">
                Processing Fee
              </CustomTypography>
            </span>
            <CustomTypography
              fontSize="15px"
              txtColor="textPrimary"
              txtType="text--light"
            >
              ${price}
            </CustomTypography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
              borderTop: "2px dotted #cfcfcf",
              borderBottom: "2px dotted #cfcfcf",
            }}
          >
            <span style={{ display: "flex" }}>
              <CustomTypography txtType="text--light" txtComponent="h3">
                Shipping
              </CustomTypography>
            </span>
            <CustomTypography txtColor="textPrimary" txtType="text--light">
              $10
            </CustomTypography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
            }}
          >
            <span style={{ display: "flex" }}>
              <CustomTypography txtType="text--light" txtComponent="h3">
                Total
              </CustomTypography>
            </span>
            <CustomTypography txtColor="textPrimary" txtType="text--light">
              <strong>${price + 10}</strong>
            </CustomTypography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

RightBuy.propTypes = {
  quantity: PropTypes.number,
  size: PropTypes.string,
  // urlKey: PropTypes.string.isRequired,
  price: PropTypes.number,
};

RightBuy.defaultProps = {
  quantity: 0,
  size: 3.5,
  price: 100,
};

export default RightBuy;
