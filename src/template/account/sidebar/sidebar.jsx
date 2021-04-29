import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import sidebarStyle from './sidebar.style';

const Sidebar = ({ routes }) =>
{
  const classes = sidebarStyle();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, false),
      }}
      open
    >
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
                <Link
                  to={`/account${path}`}
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
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(
    {
      path: PropTypes.string,
      name: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      icon: PropTypes.object,
      component: PropTypes.func,
    },
  )).isRequired,
};

export default Sidebar;
