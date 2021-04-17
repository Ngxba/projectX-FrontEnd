import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PropTypes from 'prop-types';
import CustomTypography from '../Typography/typography';
import { makeKey } from '../../utils/supportFunction';

function SimpleBreadcrumbs(props)
{
  const { data } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {data.map((item, i) =>
      {
        if (i !== data.length - 1)
        {
          return (
            <CustomTypography
              color="#666"
              fontSize="12px"
              txtType="text--light"
              key={makeKey()}
              style={{ textTransform: 'uppercase' }}
            >
              {item}
            </CustomTypography>
          );
        }
        return (
          <CustomTypography
            style={{ textTransform: 'uppercase' }}
            key={makeKey()}
            fontSize="12px"
            txtType="text--light"
          >
            {item}
          </CustomTypography>
        );
      })}
    </Breadcrumbs>
  );
}

SimpleBreadcrumbs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SimpleBreadcrumbs;
