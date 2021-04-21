/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import {
  Link as RouterLink, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Route } from 'react-router';
import dashboardStyle from './index.style';
import routes from './dashboard/routes';

const Sidebar = ({
  classes,
  currentPath,
}) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper, false),
    }}
    open
  >
    <Divider />
    <List>
      {
        routes.map((prop) =>
        {
          const {
            path,
            name,
            icon: Icon,
          } = prop;

          const renderLink = React.useMemo(
            () => React.forwardRef((itemProps, ref) => (
              <RouterLink
                to={`${currentPath}${path}`}
                ref={ref}
                {...itemProps}
              />
            )),
            [path],
          );

          return (
            <li key={name}>
              <ListItem button component={renderLink}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </li>
          );
        })
      }
    </List>
  </Drawer>
);

const UserAccount = ({ match }) =>
{
  const classes = dashboardStyle();
  const { path } = match;

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Sidebar classes={classes} currentPath={path} />

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              {routes.map((prop) => (
                <Route
                  path={`${path}${prop.path}`}
                  component={prop.component}
                  key={prop.name}
                />
              ))}
              <Redirect from="/account" to="/account/profile" />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default UserAccount;
