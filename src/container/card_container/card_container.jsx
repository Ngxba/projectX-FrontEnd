/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import HelpIcon from "@material-ui/icons/Help";
import CustomCard from "../card/card";
import CustomTypography from "../../components/Typography/typography";
import { makeKey } from "../../utils/supportFunction";

const fakeData = [
  {
    productName: "Product Title",
    price: 100,
    numberSold: 0,
    imageurl:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    productName: "Product Title",
    price: 100,
    numberSold: 0,
    imageurl:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    productName: "Product Title",
    price: 100,
    numberSold: 0,
    imageurl:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    productName: "Product Title",
    price: 100,
    numberSold: 0,
    imageurl:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
];

const TYPES = ["product", "brand"];

const CardContainer = (props) => {
  const {
    data, showCategory, type, title,
  } = props;
  return (
    <React.Fragment key='product grid'>
      {showCategory && (
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
              {title}
            </CustomTypography>
            {type === TYPES[0] && <HelpIcon style={{ marginLeft: "10px" }} />}
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
      )}
      <Grid container spacing={3}>
        {type === TYPES[0]
          ? data.map((doc) => (
              <Grid key={makeKey(5)} item xs={6} sm={3}>
                <CustomCard data={doc} type={type} />
              </Grid>
            ))
          : data.map((doc) => (
              <Grid key={makeKey(5)} item xs={4}>
                <CustomCard data={doc} type={type} />
              </Grid>
            ))}
      </Grid>
    </React.Fragment>
  );
};

CardContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      numberSold: PropTypes.number,
      imgSrc: PropTypes.string,
    }),
  ),
  type: PropTypes.oneOf(TYPES),
  title: PropTypes.string,
  showCategory: PropTypes.bool,
};

CardContainer.defaultProps = {
  data: fakeData,
  type: TYPES[0],
  showCategory: true,
  title: "",
};

export default CardContainer;
