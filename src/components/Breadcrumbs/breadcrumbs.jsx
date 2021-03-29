import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CustomTypography from '../Typography/typography';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: '11px',
    margin: '10px 0 0',
    padding: '0',
    textTransform: 'uppercase',

    '& @media (max-width:991px)': {
      fontSize: '9px',
    },
    '& @media (max-width:767px)': {
      margin: '0',
      height: '0',
      overflow: 'hidden',
    },
    '& @media (max-width:650px)': {
      margin: '10px 0',
      fontSize: '8px',
    },
  },
}));

function SimpleBreadcrumbs(props)
{
  const classes = useStyles();

  const { data } = props;

  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        classes={
          {
            root: classes.root,
            ol: {
              // Pass fontSize from root
              fontSize: 'inherit',
            },
            li: {
              // Pass fontSize from ol
              fontSize: 'inherit',
            },
            separator: {
              padding: '0 5px',
              color: '#ccc',
              content: '"/\\00a0"',
            },
          }
        }
      >
        {data.map((item, i) =>
        {
          const dataItem = item.toUpperCase();
          if (i !== data.length - 1)
          {
            return (
              <CustomTypography
                color="#666"
                // Pass fontSize from li
                fontSize="inherit"
                txtType="text--light"
              >
                {dataItem}
              </CustomTypography>
            );
          }
          return (
            // Pass fontSize from li
            <CustomTypography fontSize="inherit" txtType="text--light">
              {dataItem}
            </CustomTypography>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

SimpleBreadcrumbs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SimpleBreadcrumbs;
