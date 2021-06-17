/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import productStyle from './index.style';
import ProductHeader from './product_header/product_header';
import ProductMedia from './product_media/product_media';
import ProductInfo from './product_info/product_info';
import RelatedProduct from './related_product/related_product';
import { FetchProduct } from '../../redux/actions/productActions';
import FetchRelatedProducts from '../../redux/actions/relatedProducAction';
import Shadow from '../../components/Shadow/shadow';

const Product = ({ match }) =>
{
  const classes = productStyle();
  const { params } = match;

  const productState = useSelector((state) => state.productState);
  const relatedProductsState = useSelector((state) => state.relatedProductsState);

  const dispatch = useDispatch();

  useEffect(() =>
  {
    dispatch(FetchProduct(params.urlKey));
  }, [params.urlKey]);

  const { tags } = productState.productData;

  const data = {
    category: tags[0],
    tag: tags[1],
    tag2: tags[2],
    tag3: tags[3],
  };

  useEffect(() =>
  {
    dispatch(FetchRelatedProducts(0, 15, data));
  }, [tags]);

  // Generate data for breadcrumbs
  const textRoutes = [...tags.slice(0, tags.length - 5)];

  const linkRoutes = textRoutes.map((text, index) =>
  {
    let href = "/brand";
    for (let i = 0; i <= index; i += 1)
    {
      href += `/${textRoutes[i]}`;
    }

    return {
      href,
      text,
    };
  });

  // Add product name to last
  linkRoutes.push({
    href: `/product/${params.urlKey}`,
    text: productState.productData.productName,
  });

  // Render Circular Progress while fetching data
  if (productState.loading)
  {
    return (
      <div className={classes.center}>
        <CircularProgress size={80} />
      </div>
    );
  }
  return (
    <div className={classes.page_container}>
      {/* Shadow below navbar */}
      <Shadow />

      <Container
        classes={{
          root: classes.container,
        }}
      >
        {/* Product Header: Pick size, price */}
        <ProductHeader
          routes={linkRoutes}
          productName={productState.productData.productName}
          ticker={productState.productData.tickerSymbol}
          sizeQuantity={productState.productData.sizeQuantity}
          price={productState.productData.price}
          urlKey={params.urlKey}
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
        {relatedProductsState.loading ? (
          <CircularProgress className={classes.center} size={40} />
        ) : (
          <RelatedProduct
            relatedProductList={relatedProductsState.productsData}
          />
        )}
        )
      </Container>
    </div>
  );
};

export default Product;
