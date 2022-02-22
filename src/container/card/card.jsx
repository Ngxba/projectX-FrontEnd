/*eslint-disable*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CustomTypography from "../../components/Typography/typography";
import cardStyle from "./card.style";
import { useDispatch, useSelector } from 'react-redux';
import { UpdateLikedProductData, GetIdentity } from '../../redux/actions/userActions';

const TYPES = ["product", "brand"];

const CustomCard = (props) => {
  const { data, type, ...rest } = props;
  const classes = cardStyle(rest);
  const urlKey = type === TYPES[0] ? `/product/${data.urlKey}` : `./${data.urlKey}`;
  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [favState, setFavState] = useState(userState.userData.likedProduct.includes(data._id));

  const likedProductHandler = () => {
    let likedProduct = [...userState.userData.likedProduct];
    if (userState.userData.likedProduct.includes(data._id)) {
      likedProduct = likedProduct.filter((i) => i != data._id)
    }
    else {
      likedProduct = [...likedProduct, data._id]
    }
    dispatch(UpdateLikedProductData(userState.userData.id, likedProduct));
    setFavState(likedProduct.includes(data._id))
  }

  return (
    <>
      {type === TYPES[0] ? (
        <Card {...rest} className={classes.root}>
          <Link to={urlKey} style={{ textDecoration: "none" }}>
            <CardMedia
              className={classes.media}
              image={data.imageurl}
              title={data.productName}
              style={{ backgroundSize: "contain" }}
            />
          </Link>
          <CardContent className={classes.cardContent}>
            <Link to={urlKey} style={{ textDecoration: "none" }}>
              <CustomTypography
                // txtStyle="text--title"
                txtType="text--bold"
                fontSize="15px"
                txtComponent="h3"
                style={{
                  height: "38px",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  margin: "14px 0",
                }}
              >
                {data.productName}
              </CustomTypography>
            </Link>
            <CustomTypography
              color="rgba(0, 0, 0, 0.5);"
              txtType="text--light"
              txtColor="textSecondary"
              fontSize="14px"
              txtComponent="p"
            >
              Latest price
            </CustomTypography>
            <CustomTypography
              txtStyle="text--category"
              txtType="text--bold"
              fontSize="22px"
              txtComponent="h3"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              {`${data.price}$`}
              <IconButton aria-label="delete" onClick={() => likedProductHandler()}>
                {!favState ? <FavoriteBorderIcon /> : <FavoriteIcon />}
              </IconButton>
            </CustomTypography>
            <CustomTypography
              color="rgba(0, 0, 0, 0.5);"
              txtType="text--light"
              txtColor="textSecondary"
              fontSize="14px"
              txtComponent="p"
            >
              {data.numberSold}
              {" Sold"}
            </CustomTypography>
          </CardContent>
        </Card>
      ) : (
        <Link to={urlKey} style={{ textDecoration: "none" }}>
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
        </Link>
      )}
    </>
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
