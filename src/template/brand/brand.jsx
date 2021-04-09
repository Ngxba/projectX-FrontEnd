<<<<<<<< HEAD:src/template/brand/brand.jsx
import React from "react";
import Container from "@material-ui/core/Container";
import {
  FormControl, Select, MenuItem, Grid,
} from "@material-ui/core";
// import { PropTypes } from 'prop-types';
import CustomTypography from "../../components/Typography/typography";
import CardContainer from "../../container/card_container/card_container";
import Breadcrumb from "../../components/Breadcrumbs/breadcrumbs";
import brandStyle from "./brand.style";
========
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import { PropTypes } from 'prop-types';
import CustomTypography from '../components/Typography/typography';
import CardContainer from '../container/card_container/card_container';
import RouteBreadcrumbs from '../components/Breadcrumbs/breadcrumbs';

const styles = makeStyles((theme) => ({
  root: {
    WebkitTapHighlightColor: 'transparent',
    textSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizelegibility',
    '-chakraUiColorMode': 'light',
    fontFeatureSettings: '"kern"',
    fontFamily: 'RingsideRegular-Book, sans-serif',
    color: 'rgb(26, 32, 44)',
    lineHeight: '1.5',
    fontSize: '100%',
    borderWidth: '0px',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    borderColor: 'rgb(226, 232, 240)',
    overflowWrap: 'break-word',
    background: '#E7E8E8',
    minHeight: 'initial',
    display: 'flex',
    alignItems: 'flex-start',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage:
      'url(//stockx-assets.imgix.net/Core/browse-header-streetwear.jpg?auto=compress,format)',
    height: '270px',
    width: '100%',
    paddingLeft: '3rem',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
>>>>>>>> 447804b7e23e73a41e3e83927e0c59f005243abe:src/template/brand.jsx

const fakeData = [
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
];

<<<<<<<< HEAD:src/template/brand/brand.jsx
const Brand = () => {
  const classes = brandStyle();
  const [age, setAge] = React.useState(10);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth='md' style={{ marginTop: "90px" }}>
      <Grid className={classes.root} container xs={12}>
        <CustomTypography component='h2' txtStyle='text--heading'>
========
const Brand = () =>
{
  const classes = styles();

  return (
    <Container maxWidth="md" style={{ marginTop: '90px' }}>
      <div className={classes.root}>
        <CustomTypography component="h2" txtStyle="text--heading">
>>>>>>>> 447804b7e23e73a41e3e83927e0c59f005243abe:src/template/brand.jsx
          Supreme
        </CustomTypography>
        <CustomTypography
          component="p"
          txtType="text--light"
          style={{ maxWidth: '450px' }}
        >
          Buy and sell tees, hoodies, accessories and more from streetwear
          juggernaught Supreme on StockX here!
        </CustomTypography>
<<<<<<<< HEAD:src/template/brand/brand.jsx
      </Grid>
      <Grid className={classes.gridContainer} container spacing={2}>
        <Grid className={classes.leftSide} item xs={2}>
          <div>Other Brands</div>
        </Grid>
        <Grid className={classes.rightSide} item xs={10}>
          <Grid item xs={12} className={classes.sort}>
            <Grid item xs={6}>
              <Breadcrumb data={["home", "streetwear", "jordan"]} />
            </Grid>
            <Grid item xs={6} className={classes.formControl}>
              <FormControl>
                <div className={classes.package}>
                  <div className={classes.textRow}>
                    <span className={classes.textTitle}>
                      <strong>Sort by:&#160;</strong>
                    </span>
                    <Select
                      value={age}
                      onChange={handleChange}
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                </div>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CardContainer data={fakeData} showCategory={false} />
          </Grid>
        </Grid>
      </Grid>
========
      </div>
      <RouteBreadcrumbs data={['home', 'streetwear', 'supreme']} />
      <CardContainer data={fakeData} showCategory={false} />
>>>>>>>> 447804b7e23e73a41e3e83927e0c59f005243abe:src/template/brand.jsx
    </Container>
  );
};

export default Brand;
