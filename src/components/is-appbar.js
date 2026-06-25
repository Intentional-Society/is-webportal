import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import * as GlobalCSS from '../styles/global.module.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'

const NamedDefault = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { pathname } = useLocation()

  // Prototype nav links: muted, turn teal on hover / when active. No pill wash.
  const linkSx = path => ({
    textTransform: 'none',
    color: 'text.secondary',
    fontWeight: 400,
    fontSize: '14px',
    borderRadius: 0,
    minWidth: 'auto',
    '&:hover': { backgroundColor: 'transparent', color: 'primary.main' },
    ...(pathname.startsWith(path) && { color: 'primary.main' }),
  })

  // Filled teal call-to-action (prototype .nav-cta).
  const ctaSx = {
    textTransform: 'none',
    color: '#fff',
    backgroundColor: 'primary.main',
    fontSize: '13px',
    fontWeight: 500,
    borderRadius: '4px',
    px: 1.6,
    py: 0.6,
    '&:hover': { backgroundColor: 'primary.dark' },
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        color: 'text.primary',
        backgroundColor: 'rgba(248,245,239,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(42,42,36,0.06)',
      }}
    >
      <Toolbar sx={{ paddingRight: '12px !important', gap: { xs: 0.5, sm: 1 } }}>
        <Link
          to="/"
          className={GlobalCSS.nostyleLink}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexGrow: 1 }}
        >
          <img
            src="/images/design2026/logo.jpg"
            alt=""
            width={36}
            height={36}
            style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', display: 'block' }}
          />
          <span className={GlobalCSS.appbarWordmark}>Intentional Society</span>
        </Link>
        <Button
          component={Link}
          to="/web"
          sx={{ ...linkSx('/web'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Web
        </Button>
        <Button
          component={Link}
          to="/community"
          sx={{ ...linkSx('/community'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Community
        </Button>
        <Button
          component={Link}
          to="/dojo"
          sx={{ ...linkSx('/dojo'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Dojo
        </Button>
        <Button
          component={Link}
          to="/iv"
          sx={{ ...linkSx('/iv'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Ventures
        </Button>
        <Button
          component={Link}
          to="/friends"
          sx={{ ...linkSx('/friends'), display: { xs: 'none', lg: 'inline-flex' } }}
        >
          Friends
        </Button>
        <Button
          component={Link}
          to="/questions"
          sx={{ ...linkSx('/questions'), display: { xs: 'none', lg: 'inline-flex' } }}
        >
          Questions?
        </Button>
        <Button
          component={Link}
          to="/news"
          sx={{ ...linkSx('/news'), display: { xs: 'none', lg: 'inline-flex' } }}
        >
          News
        </Button>
        <Button
          component={Link}
          to="/get-involved"
          disableElevation
          variant="contained"
          sx={{ ...ctaSx, display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Get Involved
        </Button>
        <IconButton
          aria-controls="top-nav-menu"
          aria-haspopup="true"
          aria-label="menu"
          disableRipple
          onClick={handleClick}
          sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', backgroundColor: 'transparent' }, ...(anchorEl && { color: 'primary.main' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="top-nav-menu"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            component={Link}
            to="/get-involved"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            Get Involved
          </MenuItem>
          <MenuItem
            component={Link}
            to="/web"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            Web
          </MenuItem>
          <MenuItem
            component={Link}
            to="/community"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            Community
          </MenuItem>
          <MenuItem
            component={Link}
            to="/dojo"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            Dojo
          </MenuItem>
          <MenuItem
            component={Link}
            to="/iv"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            Ventures
          </MenuItem>
          <MenuItem
            component={Link}
            to="/friends"
            onClick={handleClose}
            sx={{ display: { lg: 'none' } }}
          >
            Friends
          </MenuItem>
          <MenuItem
            component={Link}
            to="/questions"
            onClick={handleClose}
            sx={{ display: { lg: 'none' } }}
          >
            Questions?
          </MenuItem>
          <MenuItem
            component={Link}
            to="/news"
            onClick={handleClose}
            sx={{ display: { lg: 'none' } }}
          >
            News
          </MenuItem>
          <MenuItem component={Link} to="/history" onClick={handleClose}>
            History
          </MenuItem>
          <MenuItem component={Link} to="/resources" onClick={handleClose}>
            Resources
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleClose}>
            About
          </MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleClose}>
            Contact
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
export default NamedDefault
