/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { CircularProgress, FormControlLabel, TextField } from '@material-ui/core';
// import PropTypes from "prop-types";
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import CustomTypography from '../../components/Typography/typography';
import CustomButton from '../../components/Buttons/button';
import { isLengthEqualZero, validateEmail } from '../../utils/supportFunction';
import { Register } from '../../redux/actions/userActions';
import authenStyle from './authen.style';

function RegisterComponent()
{
  const classes = authenStyle();
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    showPassword: false,
    approveTerm: false,
    loading: false,
  });

  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const handleClickShowPassword = () =>
  {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickTerm = () =>
  {
    setValues({
      ...values,
      approveTerm: !values.approveTerm,
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

  const handleSubmit = async (event) =>
  {
    event.preventDefault();

    const passingData = {
      name: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
      email: values.email,
      password: values.password,
    };

    dispatch(Register(passingData));

    setValues({
      ...values,
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {userState.error !== '' && !userState.isOnLoginTab && (
        <Alert
          variant="outlined"
          severity="error"
          className={classes.alertStyle}
        >
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
        value={values.firstName}
      />
      <TextField
        className={classes.root}
        color="secondary"
        label="Last Name"
        name="lastName"
        variant="outlined"
        onChange={handleChange('lastName')}
        value={values.lastName}
      />
      <TextField
        className={classes.root}
        color="secondary"
        label="Email Address"
        variant="outlined"
        name="email"
        onChange={handleChange('email')}
        value={values.email}
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
      <CustomButton
        style={{
          width: '100%',
          margin: 0,
        }}
        disabled={
          userState.loading
          || !values.approveTerm
          || isLengthEqualZero(values)
          || !validateEmail(values.email)
        }
        type="submit"
      >
        {!userState.loading ? (
          'Sign Up'
        ) : (
          <CircularProgress color="secondary" size="20px" />
        )}
      </CustomButton>
    </form>
  );
}

// Register.propTypes = {
//   submit: PropTypes.func.isRequired,
//   status: PropTypes.number,
// };

// Register.defaultProps = {
//   status: 0,
// };

export default RegisterComponent;
