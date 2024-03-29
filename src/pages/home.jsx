import React from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { nanoid } from 'nanoid';
import ContentHeader from '../container/content_header/content_header';
import CardContainer from '../container/card_container/card_container';
import CustomButton from '../components/Buttons/button';
import { FetchProducts } from '../redux/actions/homeAction';
import About from '../template/about/about';
import CarouselWithTab from '../container/tab_carousel/tab_carousel';
import { FetchBestFitProduct } from '../redux/actions/userActions';

const DataBrand = [
  {
    id: nanoid(),
    productName: 'JORDAN',
    imageurl:
      'https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-jordan.png?auto=compress,format',
    imgBrandSrc:
      'https://stockx-assets.imgix.net/png/brand-tiles/img-jordan.png?auto=compress,format',
    urlKey: 'brand/sneakers/jordan',
  },
  {
    id: nanoid(),
    productName: 'NIKE',
    imageurl:
      'https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-nike-v2.png?auto=compress,format',
    imgBrandSrc:
      'https://stockx-assets.imgix.net/png/brand-tiles/img-nike.png?auto=compress,format',
    urlKey: 'brand/sneakers/nike',
  },
  {
    id: nanoid(),
    productName: 'ADIDAS',
    imageurl:
      'https://stockx-assets.imgix.net/png/brand-tiles/sneakers/homepage-tiles-adidas.png?auto=compress,format',
    imgBrandSrc:
      'https://stockx-assets.imgix.net/png/brand-tiles/img-adidas.png?auto=compress,format',
    urlKey: 'brand/sneakers/adidas',
  },
];

function Home()
{
  const homeState = useSelector((state) => state.homeState);
  const userState = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  React.useEffect(() =>
  {
    if (homeState.homeData !== {}) dispatch(FetchProducts());
  }, []);

  React.useEffect(() =>
  {
    if (userState.userData.id) dispatch(FetchBestFitProduct(userState.userData.id));
  }, [userState.userData.id]);

  if (homeState.loading)
  {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
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
    <React.Fragment key="main">
      <ContentHeader />
      <CarouselWithTab />
      <Container maxWidth="md">
        <CardContainer type="brand" title="Popular Brands" data={DataBrand} />
        <CardContainer
          title="Recent viewed"
          data={homeState.homeData.recentViewed}
        />

        {userState.userData.id
        && (
          <CardContainer
            title="May Fit for You"
            data={userState.bestFitProducts}
          />
        )}

        <div style={{
          textAlign: 'center',
          margin: '20px 0',
        }}
        >
          <Link to="/brand/sneakers" style={{ textDecoration: 'none' }}>
            <CustomButton backgroundColor="primary" buttonSize="btn--large">
              Browse Thousands of Sneakers on our Live Marketplace
            </CustomButton>
          </Link>
        </div>
      </Container>
      {/* <PosterHome /> */}
      <About />
      <Container>
        <CardContainer title="Trending Yeezy" data={homeState.homeData.latestBuy} />
        <CardContainer
          title="Trending JD"
          data={homeState.homeData.latestProduct}
        />
        <br />
      </Container>
    </React.Fragment>
  );
}

export default Home;
