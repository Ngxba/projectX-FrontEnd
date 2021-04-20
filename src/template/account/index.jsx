import React from 'react';
import {
  Route, Switch, BrowserRouter, Link,
} from 'react-router-dom';
import AccountMenu from './menu/account_menu';
import accountTemplateStyle from './index.style';
import BuyingContainer from './options_container/buying_container';
import ProfileContainer from './options_container/profile_container';

const routes = [
  {
    path: "/account",
    exact: true,
    main: () => <ProfileContainer />,
  },
  {
    path: "/buying",
    exact: true,
    main: () => <BuyingContainer />,
  },
];

const AccountTemplate = () =>
{
  const classes = accountTemplateStyle();

  return (
    <div className={classes.root}>
      <BrowserRouter>

        {/*  Left menu */}
        <AccountMenu />

        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/account">Profile</Link>
          </li>
          <li>
            <Link to="/buying">Buying</Link>
          </li>
        </ul>

        {/* Shadow below navbar */ }
        <div className={classes.shadow} />

        {/* Container for each menu option */}
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
            >
              <route.main />
            </Route>
          ))}
        </Switch>

      </BrowserRouter>
    </div>
  );
};

export default AccountTemplate;
