import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import * as PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomTypography from '../../../components/Typography/typography';
import RouteBreadcrumbs from '../../../components/Breadcrumbs/breadcrumbs';
import productHeaderStyle from './product_header.style';
import SimplePopover from '../../../components/SimplePopover';
import CustomButton from '../../../components/Buttons/button';

const ProductHeader = ({
  routes,
  ticker,
  productName,
}) =>
{
  const classes = productHeaderStyle();

  const activateButton = () => (
    <CustomButton
      classes={
        {
          root: classes.activate_button,
          endIcon: classes.end_icon,
        }
      }
      variant="text"
      endIcon={(
        <ExpandMoreIcon
          style={{ fontSize: 27, paddingTop: '1px' }}
          htmlColor="#999999"
        />
)}
    >
      All
    </CustomButton>
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
