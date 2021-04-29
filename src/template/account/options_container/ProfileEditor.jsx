import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CustomTypography from '../../../components/Typography/typography';
import CustomButton from '../../../components/Buttons/button';

// eslint-disable-next-line no-unused-vars
const useStyle = makeStyles(
  {
    root: {
      background: '#ededed',
      minHeight: 'calc(100vh - 91px)',
      paddingBottom: '90px',
    },

    container: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },

    formControl: {
      minWidth: '100%',
    },

    text_field: {
      marginBottom: '20px',
      background: '#fff',
    },

    title: {
      marginBottom: '20px',
    },

    bottom_bar: {
      display: 'flex',
      WebkitBoxPack: 'justify',
      justifyContent: 'space-between',
      position: 'fixed',
      zIndex: '1024',
      bottom: '0px',
      left: '0px',
      right: '0px',
      height: '5.25rem',
      background: '#ffffff',
      borderTopWidth: '2px',
      borderTopColor: '#cfcfcf',
      borderTopStyle: 'solid',
    },

    buttons_container: {
      display: 'flex',
      WebkitBoxAlign: 'center',
      alignItems: 'center',
      WebkitBoxPack: 'justify',
      justifyContent: 'space-between',
      height: '100%',
      paddingTop: '0px',
      paddingBottom: '0px',
      margin: 'auto',
      width: '100%',
      maxWidth: '33%',
      minWidth: '530px',
      paddingInline: '30px',
    },

  },
);

const ProfileEditor = () =>
{
  const classes = useStyle();

  const userState = useSelector((state) => state.userState);
  const { userData } = userState;

  const {
    name,
    email,
    _id,
  } = userData;

  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: name.firstName,
      lastName: name.lastName,
      id: _id,
      email,
    },
  });

  const onSubmit = (data) => console.log(data);

  // Generate shoe size data
  const sizeList = [];
  for (let i = 3.5; i <= 18; i += 0.5)
  {
    sizeList.push(i);
  }

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>

          {/* Heading */}
          <CustomTypography txtType="text--medium" txtStyle="text--heading">
            Profile
          </CustomTypography>
          <CustomTypography txtType="text--medium" style={{ marginBottom: '2.5rem' }}>
            Change your profile settings
          </CustomTypography>

          {/* Form */}
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >

            {/* Name */}
            <CustomTypography
              className={classes.title}
              txtType="text--medium"
            >
              Name
            </CustomTypography>
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.text_field}
                  fullWidth
                  label="First Name"
                  variant="outlined"
                />
              )}
            />

            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.text_field}
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                />
              )}
            />

            {/* User Info */}
            <CustomTypography
              className={classes.title}
              txtType="text--medium"
            >
              User Info
            </CustomTypography>
            <Controller
              control={control}
              name="id"
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.text_field}
                  disabled
                  fullWidth
                  label="ID"
                  variant="outlined"
                />
              )}
            />

            {/* Email */}
            <CustomTypography
              className={classes.title}
              txtType="text--medium"
            >
              Contact Info
            </CustomTypography>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.text_field}
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
              )}
            />

            <div className={classes.bottom_bar}>
              <div className={classes.buttons_container}>

                <CustomButton
                  component={Link}
                  to="/account/profile"
                  variant="outlined"
                  backgroundColor="secondary"
                >
                  Cancel
                </CustomButton>

                <CustomButton
                  type="submit"
                  variant="outlined"
                >
                  Submit
                </CustomButton>
              </div>

            </div>
          </form>
        </Container>
      </div>

    </>
  );
};

export default ProfileEditor;
