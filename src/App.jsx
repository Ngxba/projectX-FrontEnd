import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import CustomTab from './components/CustomTab/custom_tab';
import CustomCarousel from './container/carousel/carousel';

// import LoginScreen from './container/Login/login';

const carousels = [
  {
    title: 'Item one',
    component: <CustomCarousel />,
  },
  {
    title: 'Item two',
    component: <CustomCarousel />,
  },
  {
    title: 'Item three',
    component: <CustomCarousel />,
  },

];

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <CustomTab
          labels={['Item one', 'Item two', 'Item three']}
          data={carousels}
        />

        {/* <LoginScreen /> */}

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
