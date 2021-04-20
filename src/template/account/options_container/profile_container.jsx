/* eslint-disable react/prop-types */
import React from 'react';
import profileContainerStyle from './profile.style';

const ProfileContainer = () =>
{
  const classes = profileContainerStyle();

  return (
    <div className={classes.root}>
      <h1>Profile Container</h1>
    </div>
  );
};

export default ProfileContainer;
