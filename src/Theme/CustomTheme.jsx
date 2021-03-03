import { createMuiTheme } from '@material-ui/core/styles';

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#08A05C',
    },
    secondary: {
      main: '#cc4a39',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default CustomTheme;
