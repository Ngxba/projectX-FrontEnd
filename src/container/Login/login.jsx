import React from 'react';
import loginStyle from './login.style';
import LoginNavbar from './login_navbar/login_navbar';
import Form from './login_form/login_form';

const LoginScreen = () =>
{
  const classes = loginStyle();

  return (
    <div className={classes.root}>
      {/*  Navbar */}
      <LoginNavbar />

      {/*  Login/Register form */}
      <Form />
    </div>

  );
};

export default LoginScreen;
