/* eslint-disable react/forbid-prop-types,react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props)
{
  const {
    children,
    value,
    index,
    ...other
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const CustomTab = ({ data }) =>
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
      <AppBar
        position="static"
        color="default"
        style={{
          width: '500px',
          backgroundColor: 'white',
          boxShadow: 'none',
          margin: '0 auto',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          {
            data.map((element, index) => (
              <Tab label={element.title} {...a11yProps(index)} />
            ))
          }
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {
          data.map((element, index) => (
            <TabPanel value={value} index={index} dir={theme.direction}>
              {element.component}
            </TabPanel>
          ))
        }
      </SwipeableViews>
    </div>
  );
};

CustomTab.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact(
    {
      title: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    },
  )).isRequired,
};

export default CustomTab;
