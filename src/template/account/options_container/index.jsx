/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import {
  useLocation,
} from "react-router-dom";
import optionContainerStyle from './index.style';
import ProfileContainer from './profile_container';
import BuyingContainer from './buying_container';

const OptionContainer = () =>
{
  const classes = optionContainerStyle();
  const location = useLocation();

  let Container;

  switch (location.pathname)
  {
    case '/account':
      Container = <ProfileContainer />;
      break;
    case '/buying':
      Container = <BuyingContainer />;
      break;
    default:
      break;
  }

  return (
    <>
      {/* Shadow below navbar */ }
      <div className={classes.shadow} />
      {Container}
    </>

  );
};

export default OptionContainer;
