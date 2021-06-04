import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import buyingContainerStyle from './buying.style';
import Shadow from '../../../components/Shadow/shadow';
import CustomTable from './buying_table';

const BuyingContainer = () =>
{
  const classes = buyingContainerStyle();

  const userState = useSelector((state) => state.userState);
  const orderState = useSelector((state) => state.orderState);

  if (userState.loading || orderState.loading)
  {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress size={80} />
      </div>
    );
  }

  return (
    <>
      <Shadow />
      <div className={classes.root}>
        <CustomTable data={orderState.orderData} />
      </div>
    </>
  );
};

export default BuyingContainer;
