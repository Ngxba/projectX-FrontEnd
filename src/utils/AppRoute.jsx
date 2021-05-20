import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const AppRoute = ({
  component: Component,
  redirectPath,
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
      : <Redirect to={redirectPath} />
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
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isMainPage: PropTypes.bool,
  isPrivate: PropTypes.bool,
  redirectPath: PropTypes.string,
};

AppRoute.defaultProps = {
  layout: () => <></>,
  isMainPage: false,
  isPrivate: false,
  redirectPath: '/',
};

export default AppRoute;
