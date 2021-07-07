import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import "./layout.module.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ISAppBar from "./is-appbar";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

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
  `);
  const classes = useStyles();

  return <>
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description}/>
  </Helmet>
  <CssBaseline/>
  <ISAppBar/>
  <div className={classes.offset} /> {/* one AppBar's worth of space */}
  {children}
  <StaticImage src="../../static/images/bg/E7EFEBbg.png" layout="fullWidth" alt="" loading="eager"
                style={{ height: "120px", zIndex: -1, position: "relative",
                bottom: "0", left: "0", right: "0"}}
                imgStyle={{objectFit: "fill", transform: "scaleY(-1)"}}/>
  </>
}
export default NamedDefault;