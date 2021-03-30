import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import * as PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomTypography from '../../../components/Typography/typography';
import RouteBreadcrumbs from '../../../components/Breadcrumbs/breadcrumbs';
import productHeaderStyle from './product_header.style';
import SimplePopover from '../../../components/SimplePopover';

const ProductHeader = ({
  routes,
  ticker,
  productName,
}) =>
{
  const classes = productHeaderStyle();

  const activateButton = () => (
    <div className="select-control shoe-size">
      <button
        type="button"
        className="chakra-button chakra-menu__menu-button btn btn-default size-sm  css-1vh5ev7"
        data-toggle="dropdown"
        data-id="region"
        aria-label="Size Select Menu Button"
        title="All"
        data-testid="product-size-select"
        id="menu-button-47"
        aria-expanded="false"
        aria-haspopup="menu"
        aria-controls="menu-list-47"
      >
        <span className="css-a9hmjk">
          <div className="variant css-70qvj9">
            <p className="chakra-text css-w4u2v2">All</p>
            <svg viewBox="0 0 448 512" focusable="false" className="chakra-icon css-onkibi">
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              />
            </svg>
          </div>
        </span>
      </button>
    </div>
  );

  return (
    <>
      <div className={classes.routes_breadcrumbs_container}>
        {/* Product route */}
        <RouteBreadcrumbs data={routes} />

        {/* TODO Social buttons */}

      </div>

      {/*  Product name */}
      <CustomTypography
        txtStyle="text--heading"
        txtType="text--bold"
        txtComponent="h1"
        fontSize="48px  "
      >
        {productName}
      </CustomTypography>

      {/* Product general info */}
      <div className={classes.info_container}>
        <Breadcrumbs
          separator="|"
          classes={
            {
              root: classes.info_breadcrumbs,
              separator: classes.separator,
            }
          }
          aria-label="breadcrumb"
        >
          <CustomTypography color="#999">
            <span style={{ marginRight: '3px' }}>Condition:</span>
            <span className={classes.condition}>
              New
            </span>
          </CustomTypography>
          <CustomTypography color="#999">
            <span style={{ marginRight: '3px' }}>Ticker:</span>
            <span>
              {ticker}
            </span>
          </CustomTypography>
          <CustomTypography color="#999">
            <span className={classes.condition}>
              100% Authentic
            </span>
          </CustomTypography>
        </Breadcrumbs>
      </div>

      {/* TODO Size picker */}
      <div className={classes.market_summary}>
        <div className={classes.options}>
          <CustomTypography fontSize="16px" color="#999">
            Size:
          </CustomTypography>

          <SimplePopover
            activateComponent={activateButton}
          >
            <Typography className={classes.typography}>The content of the Popover.</Typography>
          </SimplePopover>

        </div>
      </div>

      {/* TODO Buy button */}
    </>
  );
};

ProductHeader.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  productName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
};

export default ProductHeader;
