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
        const dataItem = item.toUpperCase();
        if (i !== data.length - 1)
        {
          return (
            <CustomTypography
              color="#666"
              fontSize="12px"
              txtType="text--light"
              key={makeKey()}
            >
              {dataItem}
            </CustomTypography>
          );
        }
        return (
          <CustomTypography key={makeKey()} fontSize="12px" txtType="text--light">
            {dataItem}
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
