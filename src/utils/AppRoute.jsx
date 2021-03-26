/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.any,
};

AppRoute.defaultProps = {
  layout: React.Fragment,
};

export default AppRoute;
