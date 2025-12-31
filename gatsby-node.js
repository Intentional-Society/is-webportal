exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/members',
    toPath: '/community',
    isPermanent: true,
  })
}
