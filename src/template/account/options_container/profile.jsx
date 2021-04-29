/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import profileContainerStyle from './profile.style';
import CustomTypography from '../../../components/Typography/typography';
import Shadow from '../../../components/Shadow/shadow';
import CustomButton from '../../../components/Buttons/button';

const ProfileContainer = () =>
{
  const classes = profileContainerStyle();

  const userState = useSelector((state) => state.userState);

  const { userData } = userState;

  const data = [
    {
      trait: 'Name',
      value: `${userData.name.firstName} ${userData.name.lastName}`,
    },
    {
      trait: 'Email Address',
      value: userData.email,
    },
    {
      trait: 'ID',
      // eslint-disable-next-line no-underscore-dangle
      value: userData._id,
    },
  ];

  if (userData.loading)
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
    <>
      <Shadow />

      <div className={classes.root}>

        <div className={classes.heading_container}>

          {/*  Heading */}
          <CustomTypography txtType="text--bold" className={classes.heading}>
            Profile
          </CustomTypography>

          {/* Edit button */}
          <CustomButton
            variant="outlined"
            backgroundColor="secondary"
            buttonSize="btn--small"
            component={Link}
            to="/account/profile/edit"
          >
            Edit
          </CustomButton>

        </div>

        {/*  Info */}
        <Grid container>
          {
            data.map((item) => (
              <Grid item xs={4}>
                <CustomTypography txtType="text--light" className={classes.title}>
                  {item.trait}
                </CustomTypography>
                <CustomTypography txtType="text--light" fontSize={15}>
                  {item.value}
                </CustomTypography>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </>
  );
};

export default ProfileContainer;
