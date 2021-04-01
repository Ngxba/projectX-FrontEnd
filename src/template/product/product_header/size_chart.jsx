import { useTheme } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import React from 'react';
import CustomTypography from '../../../components/Typography/typography';
import productHeaderStyle from './product_header.style';

const SizeChart = ({
  backButtonOnClick,
}) =>
{
  const classes = productHeaderStyle();
  const theme = useTheme();

  return (
    <>
      <div className={classes.size_chart_header}>

        {/* TODO Back button */}
        <CustomTypography
          onClick={backButtonOnClick}
          txtType="text--bold"
          style={
            {
              fontSize: '14px',
              paddingLeft: '23px',
              cursor: 'pointer',
              maxHeight: '20px',
              paddingRight: '19px',
              color: theme.palette.primary.main,
            }
          }
        >
          &lt; Back
        </CustomTypography>

        {/* TODO Header */}
        <CustomTypography
          txtType="text--bold"
          style={
            {
              textAlign: 'center',
              height: '30px',
              paddingRight: '130px',
            }
          }
        >
          Size Chart
        </CustomTypography>

      </div>

      {/* TODO  Size chart table */}
    </>
  );
};

SizeChart.propTypes = {
  backButtonOnClick: PropTypes.func.isRequired,
};

export default SizeChart;
