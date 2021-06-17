import React from 'react';
import PropTypes from 'prop-types';
import contentHeaderStyle from './content_header.style';
import CustomTypography from '../../components/Typography/typography';
import CustomInput from '../../components/Input/Input';

const ContentHeader = (props) =>
{
  const { bgImage } = props;

  const classes = contentHeaderStyle({ bgImage });

  return (
    <div className={classes.root}>
      <div className={classes['home--jumbo']}>
        <h1 className={classes.big}>
          <span className={classes['heading--top']}>
            <CustomTypography fontSize="3.5rem">
              Buy &amp; Sell
            </CustomTypography>
          </span>
          <span className={classes['heading--bot']}>
            <CustomTypography fontSize="3.5rem" color="white">
              Authentic Sneaker
            </CustomTypography>
          </span>
        </h1>
        <CustomInput placeholder="Search..." bgColor="white" width="658px" />
      </div>
    </div>
  );
};

ContentHeader.propTypes = {
  bgImage: PropTypes.string,
};

ContentHeader.defaultProps = {
  bgImage:
    '//stockx-assets.imgix.net/Core/homepage/hero_image_FW_2021.png?auto=compress,format',
};

export default ContentHeader;
