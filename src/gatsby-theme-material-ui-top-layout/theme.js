// as illustrated in https://github.com/mui-org/material-ui/tree/master/examples/gatsby-theme
// ...this seems to get picked up automagically from the theme plugin

import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Gudea',
        'Helvetica',
        'Arial',
        'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#24818E',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#E8F0EC',
    },
  },
});

export default theme;