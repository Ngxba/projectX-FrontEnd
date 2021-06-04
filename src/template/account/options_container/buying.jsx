/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLocalStorage } from '@rehooks/local-storage';
import buyingContainerStyle from './buying.style';
import Shadow from '../../../components/Shadow/shadow';
import CustomTable from './buying_table';
import { FetchOrderData } from '../../../redux/actions/orderAction';

const BuyingContainer = () =>
{
  const classes = buyingContainerStyle();

  // eslint-disable-next-line no-unused-vars
  const userState = useSelector((state) => state.userState);
  const orderState = useSelector((state) => state.orderState);

  const dispatch = useDispatch();
  const [token] = useLocalStorage('token');

  useEffect(() =>
  {
    if (userState.userData.id)
    {
      dispatch(FetchOrderData(userState.userData.id, token));
    }
  }, [userState.userData.id]);

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
