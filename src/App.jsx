import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import Navbar from './components/Navbar/navbar';

// eslint-disable-next-line
function App() {
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <Navbar />

        <Router>
          <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
          </Route>
        </Router>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
