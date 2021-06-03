/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import { CircularProgress, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import CustomTypography from '../../components/Typography/typography';
import CustomButton from '../../components/Buttons/button';
import { isLengthEqualZero, validateEmail } from '../../utils/supportFunction';
import { SignIn } from '../../redux/actions/userActions';
import authenStyle from './authen.style';

function Login()
{
  const classes = authenStyle();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [isFakeLoading, setIsFakeLoading] = useState(false);

  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();

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

  const handleSubmit = (event) =>
  {
    event.preventDefault();

    dispatch(SignIn(values));

    setValues({
      ...values,
      password: '',
    });
  };

  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  // Go back to previous page after successfully log in
  // eslint-disable-next-line consistent-return
  useEffect(() =>
  {
    async function playEffect()
    {
      setIsFakeLoading(true);

      await setTimeout(() =>
      {
        setIsFakeLoading(false);
        history.goBack();
      }, 1500);
    }

    if (userState.isLogin)
    {
      playEffect()
        .catch(() => setIsFakeLoading(false));
    }

    return () =>
    {
      clearTimeout();
    };
  }, [userState.isLogin]);

  return (
    <form onSubmit={handleSubmit}>
      {!userState.loading && userState.isLogin && !isFakeLoading && <Redirect to="/" />}
      {userState.error !== '' && userState.isOnLoginTab && (
        <Alert
          variant="outlined"
          severity="error"
          className={classes.alertStyle}
        >
          Wrong email or password!
        </Alert>
      )}
      <br />
      <TextField
        className={classes.root}
        id="outlined-basic"
        color="secondary"
        label="Email Address"
        variant="outlined"
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
        disabled={isFakeLoading
        || userState.loading
        || isLengthEqualZero(values)
        || !validateEmail(values.email)}
        style={{
          width: '100%',
          margin: 0,
          height: 51,
        }}
        type="submit"
      >
        {(!userState.loading && !isFakeLoading) ? (
          'Login'
        ) : (
          <CircularProgress color="secondary" size="20px" />
        )}
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

// Login.propTypes = {
//   submit: PropTypes.func.isRequired,
//   status: PropTypes.number,
// };

// Login.defaultProps = {
//   status: 0,
// };

export default Login;
