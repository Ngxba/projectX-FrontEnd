/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import buyingContainerStyle from './buying.style';
import Shadow from '../../../components/Shadow/shadow';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'productName',
    headerName: 'Product name',
    flex: 0.5
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.3
  },
  {
    field: 'purchaseDate',
    headerName: 'Purchase date',
    type: 'dateTime',
    flex: 0.5,
    valueFormatter: (params) => params.value.toUTCString(),

  },
  {
    field: 'price',
    type: 'number',
    headerName: 'Price',
    flex: 0.3
  }
];

const BuyingContainer = () =>
{
  const classes = buyingContainerStyle();

  const userState = useSelector((state) => state.userState);
  const orderState = useSelector((state) => state.orderState);

  const rows = orderState.orderData.map((order, index) =>
  {
    return {
      id: index + 1,
      productName: order.productName,
      status: order.status,
      purchaseDate: new Date(order.purchaseDate),
      price: order.price,
    };
  });

  console.log(rows);

  if (userState.loading || orderState.loading)
  {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CircularProgress size={80}/>
      </div>
    );
  }

  return (
    <>
      <Shadow/>
      <div className={classes.root}>
        <div style={{ height: 850, width: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                sortModel={[{
                  field: 'purchaseDate',
                  sort: 'desc'
                }]}
                rows={rows}
                columns={columns}/>
            </div>
            </div>
          </div>
        </div>
        {/*<CustomTable data={orderState.orderData}/>*/}

    </>
  );
};

export default BuyingContainer;
