import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SimpleBreadcrumbs from '../components/Breadcrumbs/breadcrumbs';

const data = {
  _id: '60615f4c18d5191cf8e960df',
  tags: ['sneakers', 'jordan', 'air jordan', 'one', 'high', 'style_id|555088-201', 'release_date|2020-09-04', 'retail_price|170', 'colorway|baroque brown/black-laser orange-racer pink'],
  productName: 'Jordan 1 Retro High Tokyo Bio Hack',
  category: 'Air Jordan One',
  colorWay: 'Baroque Brown/Black-Laser Orange-Racer Pink',
  imageurl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Bio-Hack-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606318464',
  price: 170,
  sizeQuantity: [{
    size: '30',
    quantity: '96',
  }, {
    size: '31',
    quantity: 56,
  }, {
    size: '32',
    quantity: 100,
  }, {
    size: '33',
    quantity: 105,
  }, {
    size: '34',
    quantity: 37,
  }, {
    size: '35',
    quantity: 51,
  }, {
    size: '36',
    quantity: 86,
  }, {
    size: '37',
    quantity: 52,
  }],
};

const useStyles = makeStyles(() => ({
  shadow: {
    height: '20px',
    background: 'linear-gradient(#e5e5e5,#f5f5f5,#fff,#fff)',
    backgroundColor: '#fff',

    '& @media (max-width:767px)': {
      background: '0 0',
      height: '0',
    },
  },

  page_container: {
    position: 'relative',
    minHeight: '100vh',

    '@media (min-width: 768px)': {
      paddingTop: '91px',
    },

    '@media (max-width: 767px)': {
      paddingTop: '44px',
    },
  },

  breadcrumbs_container: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',

    '@media (min-width:768px)': {
      width: '750px',
    },

    '@media (min-width:992px)': {
      width: '970px',
    },

    '@media (min-width:1200px)': {
      width: '1170px',
    },
  },
}));

const Product = () =>
{
  const classes = useStyles();

  // const {
  //   _id,
  //   tags,
  //   productName,
  //   category,
  //   colorWay,
  //   imageurl,
  //   price,
  //   sizeQuantity,
  // } = data;

  const { tags, productName } = data;

  const breadcrumbs = [...tags.slice(0, tags.length - 5), productName];

  return (
    <>
      <div className={classes.page_container}>

        {/* Shadow below navbar */}
        <div className={classes.shadow} />

        <Container>

          <SimpleBreadcrumbs data={breadcrumbs} />

        </Container>
      </div>
    </>
  );
};

export default Product;
