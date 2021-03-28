/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CustomTypography from '../../components/Typography/typography';
import CustomButton from '../../components/Buttons/button';

const styles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '16px',
    '& label': {
      fontSize: '14px',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, 3px) scale(0.75)',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& legend': {
      display: 'none',
    },
  },
  main: {
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100vh',
  },
});

function Login()
{
  const classes = styles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () =>
  {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleChange = (prop) => (event) =>
  {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const handleMouseDownPassword = (event) =>
  {
    event.preventDefault();
  };

  return (
    <form>
      <br />
      <TextField
        className={classes.root}
        id="outlined-basic"
        color="secondary"
        label="Email Address"
        variant="outlined"
      />
      <FormControl
        className={classes.root}
        variant="outlined"
        color="secondary"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
          style={{ marginBottom: '6px' }}
        />
        <CustomTypography
          fontSize="12px"
          txtType="text--light"
          txtStyle="text--link"
          txtComponent="a"
          color="black"
          style={{ textAlgin: 'right' }}
        >
          Forgot password?
        </CustomTypography>
      </FormControl>
      <CustomButton
        style={{
          width: '100%',
          margin: 0,
        }}
        type="submit"
      >
        Login
      </CustomButton>
      <CustomTypography
        fontSize="12px"
        color="rgba(0, 0, 0, 0.54)"
        txtType="text--light"
        txtComponent="p"
        style={{ marginTop: '6px' }}
      >
        {'By logging in, you agree to the '}
        <a style={{ color: 'rgba(0, 0, 0)' }} href="https://google.com">
          Terms of Service
        </a>
        {' and '}
        <a style={{ color: 'rgba(0, 0, 0)' }} href="https://google.com">
          Privacy Policy
        </a>
      </CustomTypography>
    </form>
  );
}

export default Login;
