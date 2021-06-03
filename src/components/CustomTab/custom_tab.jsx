/* eslint-disable react/forbid-prop-types,react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
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
          <Typography component="span">{children}</Typography>
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

const CustomTab = ({
  data,
  wrapper: Wrapper,
  appBarStyle,
  rootStyle,
  enableSwipeEffect,
  textColor,
}) =>
{
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

  const renderTabComponents = () => (
    data.map((element, index) => (
      <TabPanel key={element.title} value={value} index={index} dir={theme.direction}>
        {element.component}
      </TabPanel>
    ))
  );

  return (
    <div
      style={rootStyle}
    >
      <Wrapper>

        {/* Tab nav bar */}
        <AppBar
          position="static"
          color="default"
          style={appBarStyle}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor={textColor}
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
          >
            {
              // Render tab title
              data.map((element, index) => (
                <Tab
                  key={element.title}
                  disableRipple
                  label={element.title}
                  {...a11yProps(index)}
                />
              ))
            }
          </Tabs>
        </AppBar>

        {/* Tab Component */}
        {
          enableSwipeEffect

            ? (
              // Render components with swipe effect
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x' : 'x-reverse'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                {/* Render components */}
                {renderTabComponents()}
              </SwipeableViews>
            )

            // Render components only
            : renderTabComponents()

        }
      </Wrapper>
    </div>
  );
};

CustomTab.defaultProps = {
  wrapper: () => <></>,
  appBarStyle: null,
  rootStyle: null,
  enableSwipeEffect: false,
  textColor: 'primary',
};

CustomTab.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact(
    {
      title: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    },
  )).isRequired,
  wrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  appBarStyle: PropTypes.object,
  rootStyle: PropTypes.object,
  enableSwipeEffect: PropTypes.bool,
  textColor: PropTypes.string,
};

export default CustomTab;
