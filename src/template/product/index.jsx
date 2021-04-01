import React from 'react';
import Container from '@material-ui/core/Container';
import productStyle from './index.style';
import ProductHeader from './product_header/product_header';

const data = {
  _id: '60615f4c18d5191cf8e960df',
  tags: ['sneakers', 'jordan', 'air jordan', 'one', 'high', 'style_id|555088-201', 'release_date|2020-09-04', 'retail_price|170', 'colorway|baroque brown/black-laser orange-racer pink'],
  productName: 'Jordan 1 Retro High Tokyo Bio Hack',
  category: 'Air Jordan One',
  colorWay: 'Baroque Brown/Black-Laser Orange-Racer Pink',
  imageurl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Bio-Hack-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606318464',
  price: 170,
  ticker: 'AJ1H-BH',
  sizeQuantity: [{
    size: '30',
    quantity: 96,
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

const Product = () =>
{
  const classes = productStyle();

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

  const {
    tags,
    productName,
    ticker,
    sizeQuantity,
  } = data;

  // Generate data for breadcrumbs
  const routes = ['home', ...tags.slice(0, tags.length - 5), productName];

  return (
    <div className={classes.page_container}>

      {/* Shadow below navbar */}
      <div className={classes.shadow} />

      <Container classes={
        {
          root: classes.container,
        }
      }
      >

        <ProductHeader
          routes={routes}
          productName={productName}
          ticker={ticker}
          sizeQuantity={sizeQuantity}
        />

        {/* TODO Product image */}

        {/* TODO Product detail */}

        {/* TODO Product story */}

        {/* TODO Related products */}

      </Container>
    </div>
  );
};

export default Product;
