import React from 'react';
import { useTheme } from '@material-ui/core';
import CustomTab from '../../components/CustomTab/custom_tab';
import CustomCarousel from '../carousel/carousel';

const carousels = [
  {
    title: 'Sneakers',
    component: <CustomCarousel />,
  },
  {
    title: 'Accessories',
    component: <CustomCarousel />,
  },
  {
    title: 'Clothing',
    component: <CustomCarousel />,
  },

];

const CarouselWithTab = () => (
  <CustomTab
    data={carousels}
    appBarStyle={{
      width: '500px',
      backgroundColor: 'white',
      boxShadow: 'none',
      margin: '0 auto',
    }}
    rootStyle={
      {
        backgroundColor: useTheme().palette.background.paper,
      }
    }
    enableSwipeEffect
    textColor="secondary"
  />
);

export default CarouselWithTab;
