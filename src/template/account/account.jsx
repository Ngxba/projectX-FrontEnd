/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import dashboardStyle from './account.style';
import routes from './routes';
import Sidebar from './sidebar/sidebar';
import ProfileEditor from './options_container/profile_editor';

const UserAccount = ({ match }) =>
{
  const classes = dashboardStyle();
  const { path } = match;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/account/profile/edit" component={ProfileEditor} />

        <Route to="/account">
          <div className={classes.root}>
            <Sidebar routes={routes} />

            <main className={classes.content}>
              <Switch>
                {routes.map((prop) => (
                  <Route
                    path={`${path}${prop.path}`}
                    exact
                    component={prop.component}
                    key={prop.name}
                  />
                ))}
                <Redirect from="/account" to="/account/profile" />
              </Switch>
            </main>
          </div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default UserAccount;
