import React from 'react';
import { PropTypes } from 'prop-types';
import infoStyle from './site_information.style';
import data from './data';

const SiteInfo = (props) =>
{
  const { elements } = props;

  const classes = infoStyle();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.outer}>

          {/* Elements */}
          <div className={classes.container}>
            {
              elements.map((element, index) => (

                // First element
                index === 0
                  ? (
                    <div
                      key={element.title}
                      className={classes.element}
                    >
                      <a
                        className={`${classes['first--element']} ${classes['element--a']}`}
                        href={elements[0].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {elements[0].title}
                      </a>
                    </div>
                  )

                // Other elements
                  : (
                    <div
                      key={element.title}
                      className={classes.element}
                    >
                      <a className={classes['element--a']} href={element.link}>
                        {element.title}
                      </a>
                    </div>
                  )))
            }
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={classes.row}>
        <div className={classes['copyright--container']}>
          <address className={classes.copyright}>©2021 ProjectX. All Rights Reserved.</address>
        </div>
      </div>

    </div>

  );
};

SiteInfo.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.String,
    link: PropTypes.String,
  })),
};

SiteInfo.defaultProps = {
  elements: data,
};

export default SiteInfo;
