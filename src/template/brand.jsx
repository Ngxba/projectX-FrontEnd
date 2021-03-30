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

const Brand = () =>
{
  const classes = styles();

  return (
    <Container maxWidth="md" style={{ marginTop: '90px' }}>
      <div className={classes.root}>
        <CustomTypography component="h2" txtStyle="text--heading">
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
      </div>
      <RouteBreadcrumbs data={['home', 'streetwear', 'supreme']} />
      <CardContainer data={fakeData} showCategory={false} />
    </Container>
  );
};

export default Brand;
