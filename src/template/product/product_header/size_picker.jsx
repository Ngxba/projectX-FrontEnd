import { useTheme } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import React from 'react';
import CustomTypography from '../../../components/Typography/typography';
import productHeaderStyle from './product_header.style';

const SizePicker = ({
  sizeQuantity,
  sizeChartButtonOnClick,
  changeCurrentSize,
}) =>
{
  const classes = productHeaderStyle();
  const theme = useTheme();

  return (
    <>
      {/* Header */}
      <div className={classes.dropdown_header}>

        <CustomTypography
          txtType="text--bold"
          style={
            {
              fontSize: '16px',
              paddingLeft: '10px',
            }
          }
        >
          Select A U.S. Men&apos;s Size
        </CustomTypography>

        <CustomTypography
          onClick={sizeChartButtonOnClick}
          txtType="text--bold"
          style={
            {
              paddingRight: '10px',
              fontSize: '14px',
              color: theme.palette.primary.main,
              cursor: 'pointer',
              maxHeight: '20px',
            }
          }
        >
          Size Chart
        </CustomTypography>

      </div>

      {/* Size list */}
      <Grid
        justify="flex-start"
        alignItems="flex-start"
        container
        classes={
          {
            root: classes.grid_container,
            item: classes.item,
          }
        }
      >
        {
          sizeQuantity.map((size) => (
            // Only render size that has quantity > 0
            (size.quantity > 0) && (
              <Grid
                item
                xs={3}
                classes={{ item: classes.item }}
                onClick={() => changeCurrentSize(size)}
              >
                <Paper
                  classes={{ root: classes.size_paper }}
                  variant="outlined"
                  square
                >
                  <CustomTypography
                    txtType="text--bold"
                    style={
                      {
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                      }
                    }
                  >
                    {size.size}
                  </CustomTypography>
                </Paper>
              </Grid>
            )
          ))
        }

      </Grid>
    </>
  );
};

SizePicker.propTypes = {
  sizeQuantity: PropTypes.arrayOf(PropTypes.exact({
    size: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  sizeChartButtonOnClick: PropTypes.func.isRequired,
  changeCurrentSize: PropTypes.func.isRequired,
};

export default SizePicker;
