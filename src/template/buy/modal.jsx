/* eslint-disable */
import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import CustomTypography from "../../components/Typography/typography";

const CustomModal = ({
  open,
  handleClose,
  price,
  imageurl,
  productName,
  size,
  loading
}) => {
  // const [Loading, toggleLoading] = React.useState(true);
  // React.useEffect(() => {
  //   setTimeout(toggleLoading(!Loading), 2000);
  // }, []);

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper style={{ width: "60vw", margin: "90px auto 0", padding: "20px" }}>
        {loading ? (
          <CircularProgress size={80} />
        ) : (
          <>
            <CustomTypography
              txtType='text--bold'
              fontSize='30px'
              txtColor='primary'
            >
              Purchase complete!
            </CustomTypography>
            <hr />
            <img
              style={{
                maxWidth: "60%",
                objectFit: "contain",
                margin: "0 auto",
                display: "inherit",
              }}
              src={imageurl}
              alt={productName}
            />
            <br />
            <CustomTypography txtType='text--light' fontSize='20px'>
              Thanks you for buying <strong>{productName}</strong>, Size:{" "}
              <strong>{size}</strong> with us!
            </CustomTypography>
            <br />
            <CustomTypography
              style={{ textDecoration: "underline" }}
              txtType='text--light'
              fontSize='16px'
            >
              Please follow the process in the order tracking section
            </CustomTypography>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
              }}
            >
              <span style={{ display: "flex" }}>
                <CustomTypography txtType='text--light' txtComponent='h3'>
                  Processing Fee
                </CustomTypography>
              </span>
              <CustomTypography
                fontSize='15px'
                txtColor='textPrimary'
                txtType='text--light'
              >
                ${price}
              </CustomTypography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                borderTop: "2px dotted #cfcfcf",
                borderBottom: "2px dotted #cfcfcf",
              }}
            >
              <span style={{ display: "flex" }}>
                <CustomTypography txtType='text--light' txtComponent='h3'>
                  Shipping
                </CustomTypography>
              </span>
              <CustomTypography txtColor='textPrimary' txtType='text--light'>
                $10
              </CustomTypography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
              }}
            >
              <span style={{ display: "flex" }}>
                <CustomTypography txtType='text--light' txtComponent='h3'>
                  Total
                </CustomTypography>
              </span>
              <CustomTypography txtColor='textPrimary' txtType='text--light'>
                <strong>${price + 10}</strong>
              </CustomTypography>
            </div>
            <CustomTypography
              style={{ margin: "10px 0", textDecoration: "" }}
              txtColor='textPrimary'
              txtType='text--light'
            >
              <i>Please wait for redirection!</i>
            </CustomTypography>
            <LinearProgress />{" "}
          </>
        )}
      </Paper>
    </Modal>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  imageurl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CustomModal;
