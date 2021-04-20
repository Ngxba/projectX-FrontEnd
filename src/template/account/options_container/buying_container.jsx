/* eslint-disable react/prop-types */
import React from 'react';
import buyingContainerStyle from './buying_container.style';

const BuyingContainer = () =>
{
  const classes = buyingContainerStyle();

  return (
    <div className={classes.root}>
      <h1>Buying Container</h1>
    </div>
  );
};

export default BuyingContainer;
