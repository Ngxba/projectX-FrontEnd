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
  currentSize,
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
          Select A EU. Men&apos;s Size
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
          sizeQuantity.map((element) =>
          {
            const { _id, size, quantity } = element;
            const clicked = size === currentSize;

            return (
              // Only render size that has quantity > 0
              (quantity > 0) && (
                <Grid
                  key={_id}
                  item
                  xs={3}
                  classes={{ item: classes.item }}
                >
                  <Paper
                    classes={{ root: classes.size_paper }}
                    variant="outlined"
                    square
                    style={{ background: clicked ? '#eef7eb' : '#fff' }}
                    onClick={() => changeCurrentSize(size)}
                  >
                    <CustomTypography
                      txtType="text--bold"
                      style={
                        {
                          fontSize: '14px',
                          textTransform: 'uppercase',
                        }
                      }
                    >
                      {size}
                    </CustomTypography>
                  </Paper>
                </Grid>
              )
            );
          })
        }

      </Grid>
    </>
  );
};

SizePicker.propTypes = {
  sizeQuantity: PropTypes.arrayOf(PropTypes.shape({
    size: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  sizeChartButtonOnClick: PropTypes.func.isRequired,
  changeCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default SizePicker;
