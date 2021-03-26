import React from "react";
import Container from "@material-ui/core/Container";
import ContentHeader from "../container/content_header/content_header";
import GridProduct from "../container/grid_product/grid_product";
import CustomButton from "../components/Buttons/button";

function Home() {
  return (
    <React.Fragment key='main'>
      <ContentHeader />
      <Container>
        <GridProduct />
        <GridProduct />
        <GridProduct />
        <GridProduct />
        <div style={{ textAlign: "center", margin: "16px 0" }}>
          <CustomButton backgroundColor='primary' buttonSize='btn--large'>
            Browse Thousands of Sneakers on our Live Marketplace
          </CustomButton>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
