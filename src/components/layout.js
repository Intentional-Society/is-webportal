import React from 'react'
import './layout.module.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import ISAppBar from './is-appbar'
import IsFooter from './is-footer'
// Load fonts — Cormorant Garamond (display) + DM Sans (body), per the 2026 design.
// Gudea / Ovo are kept installed for any legacy usage.
import '@fontsource/dm-sans/300.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/300-italic.css'
import '@fontsource/cormorant-garamond/400-italic.css'

// fullBleed: the homepage hero sits *under* the translucent fixed nav, so it
// omits the Toolbar spacer. Content pages keep the spacer so their content
// clears the AppBar.
const NamedDefault = ({ children, fullBleed = false }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ISAppBar />
      {!fullBleed && <Toolbar /> /* Spacer for fixed AppBar */}
      {children}
      <IsFooter />
    </ThemeProvider>
  )
}
export default NamedDefault
