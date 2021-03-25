import React from 'react';
import FormContainer from './form_container/form_container';
import Form from './form/form';
import ResetPassword from './reset_password/reset_password';

const LoginForm = () => (
  <FormContainer>

    <Form />

    <ResetPassword />

  </FormContainer>
);

export default LoginForm;
