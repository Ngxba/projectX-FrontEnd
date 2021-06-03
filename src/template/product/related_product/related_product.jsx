import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import relatedProductStyle from './related_product.style';
import CustomTypography from '../../../components/Typography/typography';
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
        {relatedProductList.map((product, index) =>
        {
          // React.forwardRef to handle warning
          const ProductCard = React.forwardRef((props, ref) => (
            <CustomCard
              data={product}
              classes={{ root: classes.card }}
              innerRef={ref}
              {...props}
            />
          ));

          const CustomTab = React.forwardRef((props, ref) => (
            <Tab
              component={ProductCard}
              {...a11yProps(index)}
              innerRef={ref}
              {...props}
            />
          ));

          return (
            <CustomTab
              key={product.name}
            />
          );
        })}
      </Tabs>

      <br />

    </div>
  );
};

RelatedProduct.propTypes = {
  relatedProductList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    numberSold: PropTypes.number,
    imgSrc: PropTypes.string,
  })).isRequired,
};

export default RelatedProduct;
