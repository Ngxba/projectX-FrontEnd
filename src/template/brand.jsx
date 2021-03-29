import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import { PropTypes } from 'prop-types';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CustomTypography from "../components/Typography/typography";
import CardContainer from "../container/card_container/card_container";
import Breadcrumb from "../components/Breadcrumbs/breadcrumbs";

const styles = makeStyles(() => ({
  root: {
    WebkitTapHighlightColor: "transparent",
    textSizeAdjust: "100%",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizelegibility",
    "-chakraUiColorMode": "light",
    fontFeatureSettings: '"kern"',
    fontFamily: "RingsideRegular-Book, sans-serif",
    color: "rgb(26, 32, 44)",
    lineHeight: "1.5",
    fontSize: "100%",
    borderWidth: "0px",
    borderStyle: "solid",
    boxSizing: "border-box",
    borderColor: "rgb(226, 232, 240)",
    overflowWrap: "break-word",
    background: "#E7E8E8",
    minHeight: "initial",
    display: "flex",
    alignItems: "flex-start",
    WebkitBoxPack: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage:
      "url(//stockx-assets.imgix.net/Core/browse-header-streetwear.jpg?auto=compress,format)",
    height: "270px",
    width: "100%",
    paddingLeft: "3rem",
  },
  selectEmpty: {
    all: 'none',
    "&::before, &::after": {
      borderBottom: 'unset !important',
      backgroundColor: 'none !important',
    },
    width: '100px',
    height: '48px',
  },
  formControl: {
    display: 'inline-block',
    border: '1px solid rgb(231, 232, 232)',
    padding: '10px',
    width: '250px',
    textAlign: 'center',
  },
}));

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
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
];

const Brand = () => {
  const classes = styles();
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container maxWidth='md'>
      <div className={classes.root}>
        <CustomTypography component='h2' txtStyle='text--heading'>
          Supreme
        </CustomTypography>
        <CustomTypography
          component='p'
          txtType='text--light'
          style={{ maxWidth: "450px" }}
        >
          Buy and sell tees, hoodies, accessories and more from streetwear
          juggernaught Supreme on StockX here!
        </CustomTypography>
      </div>
      <Breadcrumb data={["home", "streetwear", "supreme"]} />
      <FormControl className={classes.formControl}>
        <span><strong>Sort by:&#160;</strong></span>
        <Select
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <CardContainer data={fakeData} showCategory={false} />
    </Container>
  );
};

export default Brand;
