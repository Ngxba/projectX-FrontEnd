import React from 'react';
import Container from '@material-ui/core/Container';
import productStyle from './index.style';
import ProductHeader from './product_header/product_header';
import ProductMedia from './product_media/product_media';
import ProductInfo from './product_info/product_info';
import RelatedProduct from './related_product/related_product';

const data = {
  available: true,
  tags: [
    'sneakers',
    'adidas',
    'yeezy',
    '350',
    'v2',
    'release_date|2017-02-11',
    'retail_price|220',
    'colorway|core black/core black/red',
    'style_id|cp9652',
    'restock_date|2020-12-05',
  ],
  _id: '606d3b387c22ea77340875ef',
  productName: 'adidas Yeezy Boost 350 V2 Black Red (2017/2020)',
  price: 220,
  gender: 'men',
  brand: 'adidas',
  productCategory: 'sneakers',
  category: 'adidas Yeezy',
  imageurl: 'https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606320792',
  tickerSymbol: 'AD-YB350V2CBR',
  detail: [
    {
      _id: '606d3b387c22ea77340875f0',
      name: 'Style',
      value: 'CP9652',
    },
    {
      _id: '606d3b387c22ea77340875f1',
      name: 'restock_date',
      value: '2020-12-05',
    },
    {
      _id: '606d3b387c22ea77340875f2',
      name: 'Colorway',
      value: 'Core Black/Core Black/Red',
    },
    {
      _id: '606d3b387c22ea77340875f3',
      name: 'Retail Price',
      value: '220',
    },
    {
      _id: '606d3b387c22ea77340875f4',
      name: 'Release Date',
      value: '2017-02-11',
    },
  ],
  description: '<b>PLEASE NOTE: This page is for the original and restock, so production dates may vary.<b> Known for their iconic collabs, once again Kanye West and adidas had brewed up more sneaker collection heat with the adidas Yeezy Boost 350 Black Red. Showing "Pirate Black" flashes, these come with a core black upper and sole that has a core red "SPLY-350" branding on both sides. These released in November 2016 and retailed at $220. Place an Ask or Bid for these today on StockX.',
  sizeQuantity: [
    {
      _id: '606d3b387c22ea77340875f5',
      size: '3',
      quantity: 43,
    },
    {
      _id: '606d3b387c22ea77340875f6',
      size: '3.5',
      quantity: 93,
    },
    {
      _id: '606d3b387c22ea77340875f7',
      size: '4',
      quantity: 10,
    },
    {
      _id: '606d3b387c22ea77340875f8',
      size: '4.5',
      quantity: 44,
    },
    {
      _id: '606d3b387c22ea77340875f9',
      size: '5',
      quantity: 30,
    },
    {
      _id: '606d3b387c22ea77340875fa',
      size: '5.5',
      quantity: 2,
    },
    {
      _id: '606d3b387c22ea77340875fb',
      size: '6',
      quantity: 99,
    },
    {
      _id: '606d3b387c22ea77340875fc',
      size: '6.5',
      quantity: 51,
    },
    {
      _id: '606d3b387c22ea77340875fd',
      size: '7',
      quantity: 25,
    },
    {
      _id: '606d3b387c22ea77340875fe',
      size: '7.5',
      quantity: 89,
    },
    {
      _id: '606d3b387c22ea77340875ff',
      size: '8',
      quantity: 9,
    },
    {
      _id: '606d3b387c22ea7734087600',
      size: '8.5',
      quantity: 47,
    },
    {
      _id: '606d3b387c22ea7734087601',
      size: '9',
      quantity: 0,
    },
    {
      _id: '606d3b387c22ea7734087602',
      size: '9.5',
      quantity: 35,
    },
    {
      _id: '606d3b387c22ea7734087603',
      size: '10',
      quantity: 27,
    },
    {
      _id: '606d3b387c22ea7734087604',
      size: '10.5',
      quantity: 93,
    },
    {
      _id: '606d3b387c22ea7734087605',
      size: '11',
      quantity: 58,
    },
    {
      _id: '606d3b387c22ea7734087606',
      size: '11.5',
      quantity: 56,
    },
  ],
  dateUpdated: '2021-04-07T04:55:20.634Z',
  __v: 0,
};

const fakeData = [
  {
    name: 'Product Title 1',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 2',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  // {
  //   name: 'Product Title 3',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 4',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 5',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 6',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 7',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 8',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 9',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 10',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },
  // {
  //   name: 'Product Title 11',
  //   price: 100,
  //   numberSold: 0,
  //   imgSrc:
  //     'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  // },

];

const Product = () =>
{
  const classes = productStyle();

  const {
    tags,
    productName,
    sizeQuantity,
    price,
    imageurl,
    description,
    detail,
    tickerSymbol,
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
        {/* Product Header: Pick size, price */}
        <ProductHeader
          routes={routes}
          productName={productName}
          ticker={tickerSymbol}
          sizeQuantity={sizeQuantity}
          price={price}
        />

        {/* Product media */}
        <ProductMedia imageURL={imageurl} productName={productName} />

        {/* Product info */}
        <ProductInfo
          detail={detail}
          description={description}
        />

        {/* Related products */}
        <RelatedProduct relatedProductList={fakeData} />

      </Container>
    </div>
  );
};

export default Product;
