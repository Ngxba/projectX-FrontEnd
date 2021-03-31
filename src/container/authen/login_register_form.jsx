/* eslint-disable react/forbid-prop-types */
import React from "react";
import Paper from "@material-ui/core/Paper";
import { PropTypes } from "prop-types";
import Login from "./login";
import Register from "./register";
import CustomTab from "../../components/CustomTab/custom_tab";
import { login, register } from "../../actions/userAction";

const Wrapper = ({ children }) => (
  <>
    <Paper style={{ width: "400px", padding: "0 16px", margin: "0 auto" }}>
      {children}
    </Paper>
  </>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const LoginRegisterForm = () => {
  const [state, setState] = React.useState({
    loginStatus: 0,
    registerStatus: 0,
  });

  const handleLoginSubmit = async (values) => {
    const { email, password } = values;
    try {
      const data = await login(email, password);
      const { token, ...rest } = data;
      localStorage.setItem("jwt_token", token);
      localStorage.setItem("info", JSON.stringify(rest));
      setState({ ...values, loginStatus: 1 });
    } catch (err) {
      setState({ ...values, loginStatus: 2 });
    }
  };
  const handleRegisterSubmit = async (values) => {
    const {
      firstName, lastName, email, password,
    } = values;
    const name = { firstName, lastName };
    try {
      const data = await register(name, email, password);
      const { token, ...rest } = data;
      localStorage.setItem("jwt_token", token);
      localStorage.setItem("info", JSON.stringify(rest));
      setState({ ...values, registerStatus: 1 });
    } catch (err) {
      setState({ ...values, registerStatus: 2 });
    }
  };
  const data = [
    {
      title: "Log in",
      component: (
        <Login status={state.loginStatus} submit={handleLoginSubmit} />
      ),
    },
    {
      title: "Sign up",
      component: (
        <Register status={state.registerStatus} submit={handleRegisterSubmit} />
      ),
    },
  ];
  return (
    <CustomTab
      data={data}
      appBarStyle={{
        width: "100%",
        backgroundColor: "white",
        boxShadow: "none",
      }}
      wrapper={Wrapper}
      rootStyle={{
        backgroundColor: "#fafafa",
        width: "100vw",
        height: "100vh",
        paddingTop: "15vh",
      }}
      textColor='secondary'
    />
  );
};

export default LoginRegisterForm;
