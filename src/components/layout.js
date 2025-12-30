import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'
import './layout.module.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import ISAppBar from './is-appbar'
// Load fonts
import '@fontsource/gudea/400.css'
import '@fontsource/ovo/400.css'

const NamedDefault = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <ISAppBar />
      <Toolbar /> {/* Spacer for fixed AppBar */}
      {children}
      <StaticImage
        src="../../static/images/bg/E7EFEBbg.png"
        layout="fullWidth"
        alt=""
        loading="eager"
        style={{
          height: '120px',
          zIndex: -1,
          position: 'relative',
          bottom: '0',
          left: '0',
          right: '0',
        }}
        imgStyle={{ objectFit: 'fill', transform: 'scaleY(-1)' }}
      />
    </ThemeProvider>
  )
}
export default NamedDefault