import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const AppRoute = ({
  component: Component,
  layout: Layout,
  isMainPage,
  isPrivate,
  ...rest
}) =>
{
  const userState = useSelector((state) => state.userState);

  const privateComponent = (props) => (
    userState.isLogin
      ? <Component {...props} />
      : <Redirect push to="/login" />
  );

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout isMainPage={isMainPage}>
          {isPrivate
            ? privateComponent(props)
            : <Component {...props} />}
        </Layout>
      )}
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func,
  isMainPage: PropTypes.bool,
  isPrivate: PropTypes.bool,
};

AppRoute.defaultProps = {
  layout: React.Fragment,
  isMainPage: false,
  isPrivate: false,
};

export default AppRoute;
