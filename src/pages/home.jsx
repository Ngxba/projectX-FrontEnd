import React from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import ContentHeader from "../container/content_header/content_header";
import CardContainer from "../container/card_container/card_container";
import CustomButton from "../components/Buttons/button";
import TabCarousel from "../container/tab_carousel/tab_carousel";
import { FetchProducts } from "../redux/actions/homeAction";

const DataBrand = [
  {
    productName: "JORDAN",
    imageurl:
      "https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-jordan.png?auto=compress,format",
    imgBrandSrc:
      "https://stockx-assets.imgix.net/png/brand-tiles/img-jordan.png?auto=compress,format",
    urlKey: "sneakers/jordan",
  },
  {
    productName: "NIKE",
    imageurl:
      "https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-nike-v2.png?auto=compress,format",
    imgBrandSrc:
      "https://stockx-assets.imgix.net/png/brand-tiles/img-nike.png?auto=compress,format",
    urlKey: "sneakers/nike",
  },
  {
    productName: "ADIDAS",
    imageurl:
      "https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-adidas.png?auto=compress,format",
    imgBrandSrc:
      "https://stockx-assets.imgix.net/png/brand-tiles/img-adidas.png?auto=compress,format",
    urlKey: "sneakers/adidas",
  },
];

function Home() {
  const homeState = useSelector((state) => state.homeState);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (homeState.homeData !== {}) dispatch(FetchProducts());
  }, []);

  return (
    <React.Fragment key='main'>
      <ContentHeader />
      <TabCarousel />
      <Container maxWidth='md'>
        <CardContainer type='brand' title='Popular Brands' data={DataBrand} />
        <CardContainer
          title='Most Popular'
          data={homeState.homeData.mostPopular}
        />
        <CardContainer title='Latest Buy' />
        <CardContainer
          title="What's trending"
          data={homeState.homeData.trending}
        />
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
