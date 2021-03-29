import React from 'react';
import Container from '@material-ui/core/Container';
import ContentHeader from '../container/content_header/content_header';
import CardContainer from '../container/card_container/card_container';
import CustomButton from '../components/Buttons/button';
import TabCarousel from '../container/tab_carousel/tab_carousel';

function Home()
{
  return (
    <React.Fragment key="main">
      <ContentHeader />
      <TabCarousel />
      <Container maxWidth="md">
        <CardContainer type="brand" title="Popular Brands" />
        <CardContainer title="Most Popular" />
        <CardContainer title="New Lowest Ask" />
        <CardContainer title="What's trending" />
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <CustomButton backgroundColor="primary" buttonSize="btn--large">
            Browse Thousands of Sneakers on our Live Marketplace
          </CustomButton>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
