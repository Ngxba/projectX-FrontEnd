import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import LayoutDefault from "../template/layout";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isMainPage,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout isMainPage={isMainPage}>
        <Component {...props} />
      </Layout>
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func,
  isMainPage: PropTypes.bool,
};

AppRoute.defaultProps = {
  layout: React.Fragment,
  isMainPage: false,
};

export default AppRoute;
