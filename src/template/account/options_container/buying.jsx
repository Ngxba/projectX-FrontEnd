import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from '@material-ui/core';
import { useLocalStorage } from '@rehooks/local-storage';
import buyingContainerStyle from './buying.style';
import Shadow from '../../../components/Shadow/shadow';
import { FetchOrderData } from '../../../redux/actions/orderAction';

const BuyingContainer = () =>
{
  const classes = buyingContainerStyle();

  const userState = useSelector((state) => state.userState);
  const orderState = useSelector((state) => state.orderState);

  const [token] = useLocalStorage('token');
  const dispatch = useDispatch();

  useEffect(() =>
  {
    dispatch(FetchOrderData(userState.userData.id, token));
  }, [userState.userData.id, token]);

  const columns = [
    {
      field: 'productName',
      headerName: 'Product name',
      flex: 0.5,
      renderCell: (params) =>
      {
        const { urlKey } = orderState.orderData.find((order) => order.productName === params.value);
        const { value } = params;

        return (
          <Link
            color="secondary"
            href={`/product/${urlKey}`}
            underline="none"
            onClick={() =>
            {
              // eslint-disable-next-line no-undef
              window.location.href = `/product/${urlKey}`;
            }}
          >
            {value}
          </Link>
        );
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.3,
    },
    {
      field: 'purchaseDate',
      headerName: 'Purchase date',
      type: 'dateTime',
      flex: 0.3,
      valueFormatter: (params) => (params.value ? params.value.toUTCString() : params.value),

    },
    {
      field: 'price',
      type: 'number',
      headerName: 'Price ($)',
      flex: 0.3,
      headerClassName: 'padding-right',
      cellClassName: 'padding-right',
    },
  ];

  const rows = orderState.orderData.map((order, index) => ({
    id: index + 1,
    productName: order.productName,
    status: order.status,
    purchaseDate: order.purchaseDate !== null ? new Date(order.purchaseDate) : null,
    price: order.price,
  }));

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
        <div
          style={{
            height: 850,
            width: '100%',
          }}
          className={classes.dataGrid}
        >
          <div style={{
            display: 'flex',
            height: '100%',
          }}
          >
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                classes={{
                  columnHeader: classes.columnHeader,
                }}
                sortModel={[{
                  field: 'purchaseDate',
                  sort: 'desc',
                }]}
                rows={rows}
                columns={columns}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyingContainer;
