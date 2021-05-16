/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CustomTypography from '../../../components/Typography/typography';
import CustomButton from '../../../components/Buttons/button';
import { updateData } from '../../../redux/actions/userActions';

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
  const [userTraits] = useLocalStorage('user_traits');
  const history = useHistory();

  const {
    name,
    email,
    id,
  } = userTraits;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: name.firstName,
      lastName: name.lastName,
      id,
      email,
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data, event) =>
  {
    event.preventDefault();

    const passingData = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      email: data.email,
      id: data.id,
    };

    dispatch(updateData(passingData));
    writeStorage('user_traits', { ...userTraits, ...passingData });
  };

  // useEffect(() =>
  // {
  //   async function playEffect()
  //   {
  //     await setTimeout(() => history.goBack(), 1500);
  //   }
  //
  //   if (!userState.loading) playEffect();
  //
  //   return () =>
  //   {
  //     clearTimeout();
  //   };
  // }, [userState.loading]);

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
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.text_field}
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? 'First name is required' : ''}
                />
              )}
            />

            <Controller
              control={control}
              name="lastName"
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.text_field}
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? 'Last name is required' : ''}
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
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.text_field}
                  fullWidth
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? 'Email is required' : ''}
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
                  disabled={userState.loading}
                >
                  {!userState.loading ? (
                    'Submit'
                  ) : (
                    <CircularProgress color="secondary" size={80} />
                  )}
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
