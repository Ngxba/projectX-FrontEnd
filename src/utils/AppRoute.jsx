import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LayoutDefault from '../container/layout';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) =>
{
  console.log('somthin');
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.element.isRequired,
  layout: PropTypes.element,
};

AppRoute.defaultProps = {
  layout: <LayoutDefault />,
};

export default AppRoute;
