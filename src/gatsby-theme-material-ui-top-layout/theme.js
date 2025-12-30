// Theme configuration for MUI v7
// Now used via ThemeProvider in layout.js instead of gatsby-theme-material-ui

import { createTheme } from '@mui/material/styles'

const gudeaFont = ['Gudea', 'Helvetica', 'Arial', 'sans-serif'].join(',')
const ovoFont = ['Ovo', 'Georgia', 'Times New Roman', 'serif'].join(',')

const theme = createTheme({
  typography: {
    // Default body font is Ovo (serif)
    fontFamily: ovoFont,
    // Headings use Gudea (sans-serif)
    h1: { fontFamily: gudeaFont },
    h2: { fontFamily: gudeaFont },
    h3: { fontFamily: gudeaFont },
    h4: { fontFamily: gudeaFont },
    h5: { fontFamily: gudeaFont },
    h6: { fontFamily: gudeaFont },
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