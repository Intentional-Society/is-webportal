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
  const wash = 'rgba(255,255,255,0.15)'
  const btnSx = path => ({
    textTransform: 'inherit',
    color: 'inherit',
    borderRadius: '7px',
    '&:hover': { backgroundColor: wash },
    ...(pathname.startsWith(path) && { backgroundColor: wash }),
  })

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        color: 'secondary.main',
        opacity: '85%',
        backgroundImage:
          'radial-gradient(circle at 20% -150%, #5c9d93, #519f9a, #44a0a2, #36a1ab, #25a2b5, #109fbb, #009bc1, #0097c6, #008ec7, #0085c8, #0c7bc6, #2b70c3)',
      }}
    >
      <Toolbar>
        <div className={GlobalCSS.appbarWordmark} style={{ flexGrow: 1, color: 'inherit' }}>
          <Link to="/" className={GlobalCSS.nostyleLink}>
            Intentional Society
          </Link>
        </div>
        <Button
          component={Link}
          to="/get-involved"
          sx={{ ...btnSx('/get-involved'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Get Involved
        </Button>
        <Button
          component={Link}
          to="/web"
          sx={{ ...btnSx('/web'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Web
        </Button>
        <Button
          component={Link}
          to="/community"
          sx={{ ...btnSx('/community'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Community
        </Button>
        <Button
          component={Link}
          to="/dojo"
          sx={{ ...btnSx('/dojo'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Dojo
        </Button>
        <Button
          component={Link}
          to="/iv"
          sx={{ ...btnSx('/iv'), display: { xs: 'none', sm: 'inline-flex' } }}
        >
          Ventures
        </Button>
        <Button
          component={Link}
          to="/friends"
          sx={{ ...btnSx('/friends'), display: { xs: 'none', lg: 'inline-flex' } }}
        >
          Friends
        </Button>
        <Button
          component={Link}
          to="/news"
          sx={{ ...btnSx('/news'), display: { xs: 'none', lg: 'inline-flex' } }}
        >
          News
        </Button>
        <Button
          component={Link}
          to="/questions"
          sx={{ ...btnSx('/questions'), display: { xs: 'none', lg: 'inline-flex' } }}
        >
          Questions?
        </Button>
        <IconButton
          aria-controls="top-nav-menu"
          aria-haspopup="true"
          aria-label="menu"
          onClick={handleClick}
          sx={{ color: 'inherit', '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' } }}
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
            to="/news"
            onClick={handleClose}
            sx={{ display: { lg: 'none' } }}
          >
            News
          </MenuItem>
          <MenuItem
            component={Link}
            to="/questions"
            onClick={handleClose}
            sx={{ display: { lg: 'none' } }}
          >
            Questions?
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
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
export default NamedDefault
