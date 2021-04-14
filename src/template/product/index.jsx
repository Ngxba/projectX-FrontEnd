/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import productStyle from './index.style';
import ProductHeader from './product_header/product_header';
import ProductMedia from './product_media/product_media';
import ProductInfo from './product_info/product_info';
import RelatedProduct from './related_product/related_product';
import { FetchProduct } from '../../redux/actions/productActions';

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
  {
    name: 'Product Title 3',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 4',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 5',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 6',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 7',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 8',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 9',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 10',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    name: 'Product Title 11',
    price: 100,
    numberSold: 0,
    imgSrc:
      'https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
];

const Product = ({ match }) =>
{
  const classes = productStyle();

  const { params } = match;
  const [routes, setRoutes] = React.useState([]);

  const productState = useSelector((state) => state.productState);
  const dispatch = useDispatch();

  useEffect(() =>
  {
    dispatch(FetchProduct(params.urlKey));

    // Generate data for breadcrumbs
    setRoutes(['home', ...productState.productData.tags.slice(0, productState.productData.tags.length - 5), productState.productData.productName]);
  }, []);

  return (
    <div className={classes.page_container}>
      {/* Shadow below navbar */}
      <div className={classes.shadow} />

      <Container
        classes={{
          root: classes.container,
        }}
      >
        {/* Product Header: Pick size, price */}
        <ProductHeader
          routes={routes}
          productName={productState.productData.productName}
          ticker={productState.productData.tickerSymbol}
          sizeQuantity={productState.productData.sizeQuantity}
          price={productState.productData.price}
        />

        {/* Product media */}
        <ProductMedia
          imageURL={productState.productData.imageurl}
          productName={productState.productData.productName}
        />

        {/* Product info */}
        <ProductInfo
          detail={productState.productData.detail}
          description={productState.productData.description}
        />

        {/* Related products */}
        <RelatedProduct relatedProductList={fakeData} />
      </Container>
    </div>
  );
};

export default Product;
