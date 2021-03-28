/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Login from './login';
import Register from './register';

function TabPanel(props)
{
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box paddingBottom={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index)
{
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100vh',
    paddingTop: '15vh',
  },
});

export default function FullWidthTabs()
{
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) =>
  {
    setValue(newValue);
  };

  const handleChangeIndex = (index) =>
  {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Paper style={{ width: '400px', padding: '0 16px', margin: '0 auto' }}>
        <AppBar
          position="static"
          color="default"
          style={{
            width: '100%',
            backgroundColor: 'white',
            boxShadow: 'none',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
          >
            <Tab label="Log in" {...a11yProps(0)} />
            <Tab label="Sign up" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Login />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Register />
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </div>
  );
}
