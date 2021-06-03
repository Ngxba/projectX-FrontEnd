/* eslint-disable react/prop-types */
import React from 'react';
import buyingContainerStyle from './buying.style';
import Shadow from '../../../components/Shadow/shadow';
import CustomTable from './buying_table';

const BuyingContainer = () =>
{
  const classes = buyingContainerStyle();

  return (
    <>
      <Shadow />
      <div className={classes.root}>
        <CustomTable />
      </div>
    </>
  );
};

export default BuyingContainer;
