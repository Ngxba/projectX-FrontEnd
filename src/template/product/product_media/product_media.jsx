import React from 'react';
import * as PropTypes from 'prop-types';
import productMediaStyle from './product_media.style';

const ProductMedia = ({ imageURL, productName }) =>
{
  const classes = productMediaStyle();

  return (
    <div className={classes.root}>
      <div className={classes.image_container}>
        <div className="inner">
          <img className="image" src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
};

ProductMedia.propTypes = {
  productName: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ProductMedia;
