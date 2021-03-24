import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import HelpIcon from "@material-ui/icons/Help";
import CustomCard from "../card/card";
import CustomTypography from "../../components/Typography/typography";

const fakeData = [
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
];
const GridProduct = (props) => {
  const { data } = props;
  return (
    <React.Fragment key='product grid'>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "16px 0",
        }}
      >
        <span style={{ display: "flex" }}>
          <CustomTypography
            txtStyle='text--category'
            txtType='text--medium'
            txtComponent='h3'
            fontSize='18px'
          >
            Most Popular
          </CustomTypography>
          <HelpIcon style={{ marginLeft: "10px" }} />
        </span>
        <CustomTypography
          txtStyle='text--link'
        //   txtType='text--medium'
          txtComponent='a'
          fontSize='14px'
          txtColor='textPrimary'
        >
          See all
        </CustomTypography>
      </div>
      <Grid container spacing={3} justify='center'>
        {data.map((doc) => (
          <Grid item xs={6} sm={3}>
            <CustomCard data={doc} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

GridProduct.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      numberSold: PropTypes.number,
      imgSrc: PropTypes.string,
    }),
  ),
};

GridProduct.defaultProps = {
  data: fakeData,
};

export default GridProduct;
