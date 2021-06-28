import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

import config from './config';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: config.color,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    action: {
      hover: config.color,
    },
  },
});

export default theme;
