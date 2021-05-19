/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Login from './login';
import Register from './register';
import CustomTab from '../../components/CustomTab/custom_tab';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <Paper style={{
    width: '400px',
    padding: '0 16px',
    margin: '0 auto',
  }}
  >
    {children}
  </Paper>
);

const LoginRegisterForm = () =>
{
  const data = [
    {
      title: 'Log in',
      component: (
        <Login />
      ),
    },
    {
      title: 'Sign up',
      component: (
        <Register />
      ),
    },
  ];
  return (
    <CustomTab
      data={data}
      appBarStyle={{
        width: '100%',
        backgroundColor: 'white',
        boxShadow: 'none',
      }}
      wrapper={Wrapper}
      rootStyle={{
        backgroundColor: '#fafafa',
        width: '100vw',
        height: '100vh',
        marginTop: '-90px',
        paddingTop: '15%',
      }}
      textColor="secondary"
    />
  );
};

export default LoginRegisterForm;
