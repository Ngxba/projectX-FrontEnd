import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import relatedProductStyle from './related_product.style';
import CustomTypography from '../../../components/Typography/typography';
import CustomCard from '../../../container/card/card';
import { makeKey } from '../../../utils/supportFunction';

function a11yProps(index)
{
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const RelatedProduct = ({ relatedProductList }) =>
{
  const classes = relatedProductStyle();

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
            txtType="text--bold"
          >
            Related Products
          </CustomTypography>
        </div>
      </div>

      {/* Product slider */}
      <Tabs
        classes={{ indicator: classes.indicator }}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {relatedProductList.map((product, index) => (
          <Tab
            key={makeKey(5)}
            component={() => (
              <CustomCard
                data={product}
                classes={{ root: classes.card }}
              />
            )}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

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
