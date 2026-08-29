// Theme configuration for MUI v7
// Now used via ThemeProvider in layout.js instead of gatsby-theme-material-ui
//
// 2026 design system (imported from Shaun's prototype):
//   - Body: DM Sans (light), headings: Cormorant Garamond (serif)
//   - Warm palette: warm-white background, greener teal, warm neutrals
//   - The full extended palette lives as CSS variables in global.module.css
//     (--is-teal, --is-sage, --is-tan, etc.) for use in CSS modules.

import { createTheme } from '@mui/material/styles';

const serifFont = ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'].join(',');
const sansFont = ['DM Sans', 'Helvetica', 'Arial', 'sans-serif'].join(',');

const theme = createTheme({
  typography: {
    // Default body font is DM Sans. Per 2026-08 feedback, body copy and
    // links across the site read too small/light — body1/body2 default to
    // 400 weight in MUI, and neither had a font-size override here, so they
    // fell back to MUI's fairly small defaults (1rem/0.875rem). Bumped both
    // to a consistent, readable size/weight matching the 2026 pages' bodyP
    // convention (20px/500).
    fontFamily: sansFont,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    body1: {
      fontSize: '1.15rem',
      fontWeight: 500,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    // Display headings use Cormorant Garamond (serif); smaller headings stay
    // in DM Sans so sub-section labels remain crisp.
    h1: {
      fontFamily: serifFont,
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '0em',
      marginTop: '20px',
      marginBottom: '20px',
    },
    h2: {
      fontFamily: serifFont,
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '0em',
      marginTop: '20px',
      marginBottom: '20px',
    },
    h3: {
      fontFamily: serifFont,
      fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)',
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: '0em',
      marginTop: '20px',
      marginBottom: '20px',
    },
    h4: {
      fontFamily: sansFont,
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0em',
      marginTop: '10px',
      marginBottom: '10px',
    },
    h5: {
      fontFamily: sansFont,
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      marginTop: '10px',
      marginBottom: '10px',
    },
    h6: {
      fontFamily: sansFont,
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
          margin: 0, // remove the browser's default 8px body margin
          fontSize: '120%', // Match old layout.module.css body font-size: 120%
          fontWeight: 500, // was 300 — read too light per 2026-08 feedback
          lineHeight: 1.7,
          color: '#2A2A24',
          backgroundColor: '#F8F5EF',
        },
        // Apply theme heading styles to raw HTML elements (for markdown content)
        h1: themeParam.typography.h1,
        h2: themeParam.typography.h2,
        h3: themeParam.typography.h3,
        h4: themeParam.typography.h4,
        h5: themeParam.typography.h5,
        h6: themeParam.typography.h6,
        p: themeParam.typography.body1,
        // Links: solid color + underline (no reliance on default browser
        // underline styling) plus a slightly bolder weight, so they read
        // clearly as interactive text at body size.
        a: {
          color: '#2E6B4F',
          fontWeight: 500,
          textDecorationColor: 'rgba(46,107,79,0.4)',
        },
        'a:hover': {
          color: '#1A4232',
        },
      }),
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#2E6B4F', // greener teal from the prototype
      dark: '#1A4232',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#ff0000',
    },
    text: {
      primary: '#2A2A24',
      secondary: '#6B6860',
    },
    background: {
      default: '#F8F5EF', // warm-white
      paper: '#FAF8F3', // cream
    },
  },
});

export default theme;
