/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from 'prop-types';
import buyStyle from "./buy.style";
import CustomTypography from "../../components/Typography/typography";

const LeftBuy = ({
  price, size, name, imgSrc,
}) =>
{
  const classes = buyStyle();
  return (
    <div className={classes.rootPart}>
      <CustomTypography txtType="text--bold" fontSize="2rem">
        {name}
      </CustomTypography>
      <div style={{ fontSize: "16px", margin: "20px 0" }}>
        <span>
          Price: <strong>{price}$ </strong>
        </span>
        <span>
          | U.S. Men&apos;s Size <strong>{size}</strong>
        </span>
      </div>
      <img
        style={{ maxWidth: "70%", objectFit: "contain", margin: "0 auto" }}
        src={imgSrc}
        alt={name}
      />
    </div>
  );
};

LeftBuy.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  size: PropTypes.string,
  imgSrc: PropTypes.string,
};

LeftBuy.defaultProps = {
  name: "Default",
  price: 100,
  size: "3.5",
  imgSrc: "https://images.stockx.com/images/Air-Jordan-5-Retro-Raging-Bulls-Red-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1616603755z",
};

export default LeftBuy;
