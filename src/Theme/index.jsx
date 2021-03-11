import { createMuiTheme } from '@material-ui/core/styles';
import palette from './color';

const CustomTheme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },

  // colors
  ...palette,
});

export default CustomTheme;
