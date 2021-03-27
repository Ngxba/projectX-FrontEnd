import React from 'react';
import { useTheme } from '@material-ui/core';
import CustomTab from '../../components/CustomTab/custom_tab';
import CustomCarousel from '../carousel/carousel';

const carousels = [
  {
    title: 'Item one',
    component: <CustomCarousel />,
  },
  {
    title: 'Item two',
    component: <CustomCarousel />,
  },
  {
    title: 'Item three',
    component: <CustomCarousel />,
  },

];

const CarouselWithTab = () => (
  <CustomTab
    labels={['Item one', 'Item two', 'Item three']}
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
  />
);

export default CarouselWithTab;
