import React from 'react';
import { PropTypes } from 'prop-types';
import productInfoStyle from './product_info.style';
import CustomTypography from '../../../components/Typography/typography';

const ProductInfo = ({
  detail,
  description,
}) =>
{
  const classes = productInfoStyle();

  // Remove not rendered info
  const traits = detail.filter((trait) => trait.name !== 'restock_date');
  const filteredDescription = description.split('. Place an Ask or Bid for these today on StockX.')
    .shift();

  return (
    <div className={classes.root}>
      <div className={classes.detail_column}>

        {/*  Product detail */}
        {
          traits.map((element) =>
          {
            const {
              name,
              value,
            } = element;

            return (
              <div className="detail">
                <CustomTypography
                  style={{
                    display: 'inline',
                    letterSpacing: '0px',
                    fontSize: 15,
                  }}
                  txtType="text--bold"
                >
                  {name}
                  &nbsp;
                </CustomTypography>
                <CustomTypography
                  style={{
                    display: 'inline',
                    fontSize: 15,
                  }}
                  txtType="text--light"
                >
                  {name === 'Retail Price' ? `$${value}` : value}
                </CustomTypography>
              </div>
            );
          })
        }

      </div>

      {/*  Product description */}
      <div
        className={classes.description}
        dangerouslySetInnerHTML={{ __html: filteredDescription }}
      />
    </div>
  );
};

ProductInfo.propTypes = {
  detail: PropTypes.arrayOf(PropTypes.exact(
    {},
  )).isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductInfo;
