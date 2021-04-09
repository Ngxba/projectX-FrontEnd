import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
// import { Grid, Paper } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import relatedProductStyle from './related_product.style';
import CustomTypography from '../../../components/Typography/typography';
// import GridProduct from '../../../container/card_container/card_container';
import CustomCard from '../../../container/card/card';

function a11yProps(index)
{
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const RelatedProduct = ({ relatedProductList }) =>
{
  // const [maxPage, setMaxPage] = useState(4);

  const classes = relatedProductStyle();

  // const totalRelatedProduct = relatedProductList.length;

  // const handleNextOnClick = () =>
  // {
  //   if (maxPage + 4 < totalRelatedProduct)
  //   {
  //     setMaxPage(maxPage + 4);
  //   }
  //   //  In case totalRelatedProduct % 4 != 0
  //   else
  //   {
  //     setMaxPage(maxPage + (totalRelatedProduct - maxPage));
  //   }
  // };
  //
  // const handlePreviousOnClick = () =>
  // {
  //   //  Avoid render less than 4 Products when current maxPage is 5,6,7
  //   if (maxPage - 4 < 4)
  //   {
  //     setMaxPage(4);
  //   }
  //   else
  //   {
  //     setMaxPage(maxPage - 4);
  //   }
  // };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) =>
  {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      {/* Banner */}
      <div className={classes.banner_container}>
        <div className="inner">
          <CustomTypography
            className={classes.banner}
            txtComponent="div"
            txtType="text--bold"
          >
            Related Products
          </CustomTypography>
        </div>
      </div>

      {/* Product slider */}
      <div className={classes.slider_container}>

        {/* Slick list */}
        <div className={classes.slick_list}>
          <div className="slick_track">

            {/* /!*  Back button *!/ */}
            {/* <button type="button" onClick={handleNextOnClick}>Next</button> */}

            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {
                relatedProductList.map((product, index) =>
                {
                  const ProductCard = () => <CustomCard data={product} />;

                  return (
                    <Tab
                      {...a11yProps(index)}
                      component={ProductCard}
                    />
                  );
                })
              }
            </Tabs>

            {/* <Grid container spacing={3}> */}
            {/*  <Grid item xs={3}> */}
            {/*    <Paper className={classes.paper}>xs=3</Paper> */}
            {/*  </Grid> */}
            {/*  <Grid item xs={3}> */}
            {/*    <Paper className={classes.paper}>xs=3</Paper> */}
            {/*  </Grid> */}
            {/*  <Grid item xs={3}> */}
            {/*    <Paper className={classes.paper}>xs=3</Paper> */}
            {/*  </Grid> */}
            {/*  <Grid item xs={3}> */}
            {/*    <Paper className={classes.paper}>xs=3</Paper> */}
            {/*  </Grid> */}
            {/* </Grid> */}

            {/* <GridProduct */}
            {/*  data={ */}
            {/*    relatedProductList.filter( */}
            {/*      (product, index) => index < maxPage && index >= maxPage - 4, */}
            {/*    ) */}
            {/*  } */}
            {/*  showCategory={false} */}
            {/* /> */}

            {/*  Next button */}
            {/* <button */}
            {/*  type="button" */}
            {/*  onClick={handlePreviousOnClick} */}
            {/* > */}
            {/*  Previous */}
            {/* </button> */}
          </div>
        </div>
      </div>

      <br />

    </div>
  );
};

RelatedProduct.propTypes = {
  relatedProductList: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    price: PropTypes.number,
    numberSold: PropTypes.number,
    imgSrc: PropTypes.string,
  })).isRequired,
};

export default RelatedProduct;
