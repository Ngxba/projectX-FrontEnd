import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CustomTypography from "../../components/Typography/typography";
import cardStyle from "./card.style";

const TYPES = ["product", "brand"];

const CustomCard = (props) => {
  const { data, type, ...rest } = props;
  const classes = cardStyle(rest);

  return (
    <Link to={`./${data.urlKey}`} style={{ textDecoration: "none" }}>
      {type === TYPES[0] ? (
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={data.imageurl}
            title={data.productName}
            style={{ backgroundSize: "contain" }}
          />
          <CardContent className={classes.cardContent}>
            <CustomTypography
              txtStyle='text--title'
              txtType='text--light'
              fontSize='15px'
              txtComponent='h3'
              style={{ height: "38px", overflow: "hidden" }}
            >
              {data.productName}
            </CustomTypography>
            <CustomTypography
              color='rgba(0, 0, 0, 0.5);'
              txtType='text--light'
              txtColor='textSecondary'
              fontSize='14px'
              txtComponent='p'
            >
              Latest price
            </CustomTypography>
            <CustomTypography
              txtStyle='text--category'
              txtType='text--bold'
              fontSize='22px'
              txtComponent='h3'
            >
              {`${data.price}$`}
            </CustomTypography>
            <CustomTypography
              color='rgba(0, 0, 0, 0.5);'
              txtType='text--light'
              txtColor='textSecondary'
              fontSize='14px'
              txtComponent='p'
            >
              {data.numberSold}
              {" Sold"}
            </CustomTypography>
          </CardContent>
        </Card>
      ) : (
        <Card className={classes.root} style={{ position: "relative" }}>
          <CardMedia
            className={classes.media}
            image={data.imageurl}
            title={data.productName}
          />
          <CardMedia
            image={data.imgBrandSrc}
            className={classes.smallImg}
            title={data.productName}
          />
        </Card>
      )}
    </Link>
  );
};

CustomCard.propTypes = {
  data: PropTypes.shape({
    productName: PropTypes.string,
    price: PropTypes.number,
    numberSold: PropTypes.number,
    urlKey: PropTypes.string,
    imageurl: PropTypes.string,
    imgBrandSrc: PropTypes.string,
  }),
  type: PropTypes.oneOf(TYPES),
};

CustomCard.defaultProps = {
  data: {
    productName: "Product Title",
    price: 100,
    numberSold: 0,
    imageurl:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
    imgBrandSrc: "",
  },
  type: TYPES[0],
};

export default CustomCard;
