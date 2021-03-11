import React from 'react';
// import PropTypes from 'prop-types';
import contentHeaderStyle from './content_header.style';

const ContentHeader = (props) =>
{
  // const { bgImage } = props;

  const classes = contentHeaderStyle(props);

  return (
    <div className={classes.root}>
      <div className="home-jumbo">
        <h1 className="big">
          <span
            className="css-huuuo9-StyledHeadingTop"
          >
            Buy &amp; Sell
          </span>
          <span
            className="css-4gltew-StyledHeadingBottom"
          >
            Authentic collectibles
          </span>
        </h1>
        <div className="container search">
          <div id="HomePageSearchBoxWrapper" className="homepage-search">
            <div className="product-search-control" data-testid="search-box-home">
              <div className="search-row">
                <div className="search-input">
                  <form action=".">
                    <input
                      type="search"
                      id="home-search"
                      name="q"
                      placeholder="Search..."
                      defaultValue
                      className="searchbox input-text form-control"
                      autoComplete="off"
                      spellCheck="false"
                      autoCorrect="off"
                      autoCapitalize="off"
                      aria-label="Search"
                    />
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="svg-inline--fa fa-search fa-w-16 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </form>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

ContentHeader.propTypes = {
  bgImage: PropTypes.string,
};

ContentHeader.defaultProps = {
  bgImage: '//stockx-assets.imgix.net/Core/homepage/hero_image_FW_2021.png?auto=compress,format',
};

export default ContentHeader;
