import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PropTypes from 'prop-types';
import CustomTypography from '../Typography/typography';

function SimpleBreadcrumbs({ data })
{
  const routeData = data;

  // Add home to first
  routeData.unshift({
    href: '/',
    text: 'home',
  });

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {data.map((item, i) =>
      {
        if (i !== routeData.length - 1)
        {
          return (
            // TODO add replace=true to Link to prevent multiple click on same link
            <CustomTypography
              color="#666"
              fontSize="12px"
              txtType="text--light"
              key={item.href}
              href={item.href}
              style={
                {
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }
              }
            >
              {item.text}
            </CustomTypography>
          );
        }
        return (
          <CustomTypography
            style={
              {
                textTransform: 'uppercase',
                textDecoration: 'none',
              }
            }
            key={item.href}
            fontSize="12px"
            txtType="text--light"
            // href={item.href}
          >
            {item.text}
          </CustomTypography>
        );
      })}
    </Breadcrumbs>
  );
}

SimpleBreadcrumbs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default SimpleBreadcrumbs;
