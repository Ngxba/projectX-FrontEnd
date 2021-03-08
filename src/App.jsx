import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Input from './components/Input/Input';

function App() {
  return (
    <React.Fragment key="main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <Input />
    </React.Fragment>
  );
}

export default App;
