/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import RightBuy from "./rightBuy";
import LeftBuy from "./leftBuy";
import buyStyle from "./buy.style";
import CustomModal from "./modal";
import CustomButton from "../../components/Buttons/button";
import { FetchProduct } from "../../redux/actions/productActions";
import { createOrder } from "../../redux/actions/orderAction";
import { getParameterByName } from "../../utils/supportFunction";

function useQuery()
{
  return new URLSearchParams(useLocation().search);
}

const Buy = ({ match }) =>
{
  const query = useQuery();
  const { params } = match;
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productState);
  const [sizeQuantity, setSizeQuantity] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [Loading, toggleLoading] = React.useState(true);
  const [redirect, setRedirect] = React.useState(false);
  const userState = useSelector((state) => state.userState);

  const handleOpen = async () =>
  {
    toggleLoading(true);
    setOpen(true);
    setTimeout(() =>
    {
      toggleLoading(false);
    }, 2000);
    await createOrder(
      userState.userData.id,
      productState.productData._id,
      productState.productData.productName,
      productState.productData.urlKey,
      new Date().toISOString(),
      productState.productData.price + 10,
      "Processing",
    );
    setTimeout(() =>
    {
      setRedirect(true);
    }, 8000);
  };

  const handleClose = () =>
  {
    setOpen(false);
  };

  useEffect(() =>
  {
    dispatch(FetchProduct(params.urlKey));
  }, [params.urlKey]);

  useEffect(() =>
  {
    const size = getParameterByName("size");
    const sizeQuantityValue = productState.productData.sizeQuantity.reduce(
      (result, cur) =>
      {
        if (cur.size === size)
        {
          return cur.quantity;
        }
        return result;
      },
      0,
    );
    setSizeQuantity(sizeQuantityValue);
  });

  const classes = buyStyle();
  return (
    <React.Fragment key="BuyPage">
      {!userState.isLogin && <Redirect to="/login" />}
      {redirect && <Redirect to="/account/buying" />}
      {productState.loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={80} />
        </div>
      ) : (
        <>
          <CustomModal
            open={open}
            handleClose={handleClose}
            price={productState.productData.price}
            size={query.get("size")}
            productName={productState.productData.productName}
            imageurl={productState.productData.imageurl}
            loading={Loading}
          />
          <div className={classes.root}>
            <Grid container spacing={0} style={{ height: "100%" }}>
              <Grid item sm={12} md={7}>
                <LeftBuy
                  price={productState.productData.price}
                  size={query.get("size")}
                  name={productState.productData.productName}
                  imgSrc={productState.productData.imageurl}
                />
              </Grid>
              <Grid item sm={12} md={5}>
                <RightBuy
                  quantity={sizeQuantity}
                  price={productState.productData.price}
                  size={query.get("size")}
                  urlKey={params.urlKey}
                />
              </Grid>
            </Grid>
          </div>
          <Paper className={classes.bottomNav}>
            <Link
              to={`/product/${params.urlKey}`}
              style={{ textDecoration: "none" }}
            >
              <CustomButton backgroundColor="secondary">Cancle</CustomButton>
            </Link>
            <CustomButton
              disabled={sizeQuantity === 0}
              onClick={handleOpen}
              style={{ marginLeft: "30px" }}
            >
              Buy
            </CustomButton>
          </Paper>{" "}
        </>
      )}
    </React.Fragment>
  );
};

export default Buy;
