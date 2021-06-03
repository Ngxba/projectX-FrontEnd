import React from 'react';
import { PropTypes } from 'prop-types';
// import { Grid } from '@material-ui/core';
import footerNewsStyle from './footer_news.style';
import data from './data';

const FooterNews = (props) =>
{
  const { newsData } = props;
  const classes = footerNewsStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes['news--container']}>
          {/* <Grid options_container> */}
          {
            newsData.map((column) => (
              // <Grid item lg={2} md={2} xl={2} sm={6} xs={12}>
              <div key={column.id} className={classes.column}>
                <ul className={classes.ul}>

                  {/* Column title */}
                  <li
                    key={column.title}
                    data-testid="footer-link-header"
                    className={classes['li--heading']}
                  >
                    <a
                      className={classes['li--a']}
                      href={column.categoryLink}
                    >
                      {column.title}
                    </a>
                  </li>

                  {/* Column items */}
                  {
                    column.items.map((item) => (
                      <li key={item.id} className={classes.li}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          data-testid="footer-link"
                          className={`${classes['li--a']}`}
                        >
                          {item.name}
                        </a>
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
