/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
  TextField,
  FormControlLabel,
  CircularProgress,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';
import CustomTypography from '../../components/Typography/typography';
import CustomButton from '../../components/Buttons/button';
import { isLengthEqualZero, validateEmail } from '../../utils/supportFunction';

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

function Register({ submit, status })
{
  const classes = styles();
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    showPassword: false,
    approveTerm: false,
    loading: false,
  });
  const handleClickShowPassword = () =>
  {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickTerm = () =>
  {
    setValues({ ...values, approveTerm: !values.approveTerm });
  };

  const handleChange = (prop) => (event) =>
  {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) =>
  {
    event.preventDefault();
  };

  const handleSubmit = async (event) =>
  {
    event.preventDefault();
    setValues({ ...values, loading: true });
    await submit(values);
    setValues({ ...values, loading: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      {status === 2 && (
        <Alert variant="outlined" severity="error" style={{ backgroundColor: '#fff3f3', marginTop: '20px' }}>
          Account email already assigned! Please try again!
        </Alert>
      )}
      <br />
      <TextField
        className={classes.root}
        color="secondary"
        label="First Name"
        variant="outlined"
        name="firstName"
        onChange={handleChange('firstName')}
      />
      <TextField
        className={classes.root}
        color="secondary"
        label="Last Name"
        name="lastName"
        variant="outlined"
        onChange={handleChange('lastName')}
      />
      <TextField
        className={classes.root}
        color="secondary"
        label="Email Address"
        variant="outlined"
        name="email"
        onChange={handleChange('email')}
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
          name="password"
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
          txtComponent="p"
          color="black"
        >
          At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
        </CustomTypography>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.approveTerm}
            onChange={handleClickTerm}
            name="jason"
          />
        }
        style={{ cursor: 'default' }}
        label={
          <CustomTypography
            fontSize="12px"
            color="rgba(0, 0, 0, 0.54)"
            txtType="text--light"
            txtComponent="p"
          >
            {'By signing up, you agree to the '}
            <a style={{ color: 'rgba(0, 0, 0)' }} href="https://google.com">
              Terms of Service
            </a>
            {' and '}
            <a style={{ color: 'rgba(0, 0, 0)' }} href="https://google.com">
              Privacy Policy
            </a>
          </CustomTypography>
        }
      />
      <CustomButton style={{ width: '100%', margin: 0 }} disabled={values.loading || !values.approveTerm || isLengthEqualZero(values) || !validateEmail(values.email)} type="submit">
        {!values.loading ? (
          'Sign Up'
        ) : (
          <CircularProgress color="secondary" size="20px" />
        )}
      </CustomButton>
    </form>
  );
}

Register.propTypes = {
  submit: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

export default Register;
