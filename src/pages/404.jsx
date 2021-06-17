/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Link } from 'react-router-dom';
import CustomTypography from "../components/Typography/typography";

const NotFound = () => (
  <div key="404" style={{ paddingTop: "110px", textAlign: "center", height: "100vh" }}>
    <CustomTypography txtType="text--light" fontSize="3rem">
      OOPS!
    </CustomTypography>
    <iframe
      width="800"
      height="500"
      src="https://www.youtube.com/embed/EQAll6zw-EQ?autoplay=1&mute=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ margin: "20px 0" }}
    />
    <CustomTypography
      txtType="text--light"
      fontSize="2rem"
      style={{ marginBottom: "20px" }}
    >
      RETURN TO OUR <Link style={{ color: "#08A05C", textDecoration: "none" }} to="./">HOMEPAGE</Link> OR{" "}
      <Link style={{ color: "#08A05C", textDecoration: "none" }} to="./">BROWSE</Link> ALL PRODUCTS
    </CustomTypography>
  </div>
);

export default NotFound;
