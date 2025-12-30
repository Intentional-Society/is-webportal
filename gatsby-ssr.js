import React from 'react'
import config from './gatsby-config'

const { title, description } = config.siteMetadata

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <title key="title">{title}</title>,
    <meta key="description" name="description" content={description} />
  ])
}
