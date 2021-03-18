import React from 'react';
import loginStyle from './login.style';

const LoginScreen = () => {
  const classes = loginStyle();

  return (
    <>
      <div className={classes.root}>
        Login Screen
      </div>
    </>
  );
};

export default LoginScreen;
