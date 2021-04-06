import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paper } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import CustomTypography from '../../../components/Typography/typography';
import RouteBreadcrumbs from '../../../components/Breadcrumbs/breadcrumbs';
import productHeaderStyle from './product_header.style';
import SimplePopover from '../../../components/SimplePopover';
import CustomButton from '../../../components/Buttons/button';
import SizePicker from './size_picker';
import SizeChart from './size_chart';

const ProductHeader = ({
  routes,
  ticker,
  productName,
  sizeQuantity,
}) =>
{
  const classes = productHeaderStyle();

  const [isShowingSizePicker, setIsShowingSizePicker] = useState(true);
  const [currentSize, setCurrentSize] = useState('All');

  const theme = useTheme();

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
          style={{
            fontSize: 30,
            paddingTop: '1px',
          }}
          htmlColor="#999999"
        />
      )}
    >
      {currentSize}
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
        fontSize="48px"
        style={{ letterSpacing: '-.5px' }}
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
          <CustomTypography txtType="text--bold" color="#999">
            <span style={{ marginRight: '3px' }}>Condition:</span>
            <span style={{ color: theme.palette.primary.main }}>
              New
            </span>
          </CustomTypography>
          <CustomTypography txtType="text--bold" color="#999">
            <span style={{ marginRight: '3px' }}>Ticker:</span>
            <span>
              {ticker}
            </span>
          </CustomTypography>
          <CustomTypography txtType="text--bold" style={{ color: theme.palette.primary.main }}>
            100% Authentic
          </CustomTypography>
        </Breadcrumbs>
      </div>

      {/* Size picker */}
      <div className={classes.market_summary}>
        <div className={classes.options}>
          <CustomTypography txtType="text--bold" fontSize="16px" color="#999">
            Size:
          </CustomTypography>

          <SimplePopover
            activateComponent={activateButton}
          >
            {/* Size picker and size chart */}
            <Paper square classes={{ root: classes.all_size_container }}>
              {

                // Render size picker
                isShowingSizePicker ? (
                  <SizePicker
                    sizeQuantity={sizeQuantity}
                    sizeChartButtonOnClick={() => setIsShowingSizePicker(false)}
                    changeCurrentSize={(newSize) => setCurrentSize(newSize)}
                    currentSize={currentSize}
                  />
                )
                  // Render size chart
                  : (
                    <SizeChart
                      currentSize={currentSize}
                      backButtonOnClick={() => setIsShowingSizePicker(true)}
                    />
                  )
              }

            </Paper>

          </SimplePopover>

        </div>
      </div>

      {/* TODO Buy button */}
      <CustomButton buttonSize="btn--large">Buy</CustomButton>
    </>
  );
};

ProductHeader.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  productName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  sizeQuantity: PropTypes.arrayOf(PropTypes.exact({
    size: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
};

export default ProductHeader;
