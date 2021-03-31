import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
// import LayoutDefault from "../template/layout";

const AppRoute = ({
  component: Component, layout: Layout, isMainPage, ...rest
}) => {
  // eslint-disable-next-line
  console.log("somthin");
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout isMainPage={isMainPage}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.element.isRequired,
  layout: PropTypes.element,
  isMainPage: PropTypes.bool,
};

AppRoute.defaultProps = {
  layout: React.Fragment,
  isMainPage: false,
};

export default AppRoute;
