// Theme configuration for MUI v7
// Now used via ThemeProvider in layout.js instead of gatsby-theme-material-ui

import { createTheme } from '@mui/material/styles'

const gudeaFont = ['Gudea', 'Helvetica', 'Arial', 'sans-serif'].join(',')
const ovoFont = ['Ovo', 'Georgia', 'Times New Roman', 'serif'].join(',')

const theme = createTheme({
  typography: {
    // Default body font is Ovo (serif)
    fontFamily: ovoFont,
    // Headings use Gudea (sans-serif) with explicit sizing
    h1: {
      fontFamily: gudeaFont,
      fontSize: '5rem',
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
      marginTop: '20px',
      marginBottom: '20px',
    },
    h2: {
      fontFamily: gudeaFont,
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0em',
      marginTop: '20px',
      marginBottom: '20px',
    },
    h3: {
      fontFamily: gudeaFont,
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
      marginTop: '20px',
      marginBottom: '20px',
    },
    h4: {
      fontFamily: gudeaFont,
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em',
      marginTop: '10px',
      marginBottom: '10px',
    },
    h5: {
      fontFamily: gudeaFont,
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      marginTop: '10px',
      marginBottom: '10px',
    },
    h6: {
      fontFamily: gudeaFont,
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      marginTop: '10px',
      marginBottom: '10px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: {
          fontSize: '120%', // Match old layout.module.css body font-size: 120%
        },
        // Apply theme heading styles to raw HTML elements (for markdown content)
        h1: themeParam.typography.h1,
        h2: themeParam.typography.h2,
        h3: themeParam.typography.h3,
        h4: themeParam.typography.h4,
        h5: themeParam.typography.h5,
        h6: themeParam.typography.h6,
      }),
    },
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
})

export default theme