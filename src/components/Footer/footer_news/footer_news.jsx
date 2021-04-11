import React from 'react';
import { PropTypes } from 'prop-types';
// import { Grid } from '@material-ui/core';
import footerNewsStyle from './footer_news.style';
import data from './data';
import { makeKey } from '../../../utils/supportFunction';
import CustomTypography from '../../Typography/typography';

const FooterNews = (props) =>
{
  const { newsData } = props;
  const classes = footerNewsStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes['news--container']}>
          {/* <Grid container> */}
          {
            newsData.map((column) => (
              // <Grid item lg={2} md={2} xl={2} sm={6} xs={12}>
              <div className={classes.column} key={makeKey(5)}>
                <ul className={classes.ul}>

                  {/* Column title */}
                  <li
                    key={column.title}
                    data-testid="footer-link-header"
                    className={classes['li--heading']}
                  >
                    <CustomTypography
                      txtComponent="a"
                      href={column.categoryLink}
                      className={classes['li--a']}
                    >
                      {column.title}
                    </CustomTypography>
                  </li>

                  {/* Column items */}
                  {
                    column.items.map((item) => (
                      <li className={classes.li} key={makeKey(5)}>
                        <CustomTypography
                          txtComponent="a"
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          data-testid="footer-link"
                          className={classes['li--a']}
                        >
                          {item.name}
                        </CustomTypography>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

const validData = (propValue, propName, componentName) =>
{
  const { length } = propValue.newsData;

  PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    categoryLink: PropTypes.String,
    items: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.String,
      link: PropTypes.string,
    })),
  }));

  if (length > 6)
  {
    return new Error(
      `Invalid prop \`${propName}\` supplied to`
      + ` \`${componentName}\`. Max length of data array is 6 (current: ${length})`,
    );
  }

  return null;
};

FooterNews.propTypes = {
  newsData: validData,
};

FooterNews.defaultProps = {
  newsData: data,
};

export default FooterNews;
