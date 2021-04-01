/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { CircularProgress, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Alert from '@material-ui/lab/Alert';
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

function Login({
  submit,
  status,
})
{
  const classes = styles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
    loading: false,
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

  const handleSubmit = async (event) =>
  {
    event.preventDefault();
    setValues({
      ...values,
      loading: true,
    });
    await submit(values);
    setValues({
      ...values,
      loading: false,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {status === 2 && (
        <Alert
          variant="outlined"
          severity="error"
          style={{
            backgroundColor: '#fff3f3',
            marginTop: '20px',
          }}
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
        disabled={values.loading || isLengthEqualZero(values) || !validateEmail(values.email)}
        style={{
          width: '100%',
          margin: 0,
        }}
        type="submit"
      >
        {!values.loading ? 'Login' : <CircularProgress color="secondary" size="20px" />}
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

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

// Login.defaultProps = {
//   type: TYPES[0],
// };

export default Login;
