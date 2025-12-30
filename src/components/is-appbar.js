import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import * as GlobalCSS from '../styles/global.module.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'

const NamedDefault = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [spacesAnchor, setSpacesAnchor] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        color: 'secondary.main',
        opacity: '80%',
        backgroundImage:
          'radial-gradient(circle at 20% -150%, #5c9d93, #519f9a, #44a0a2, #36a1ab, #25a2b5, #109fbb, #009bc1, #0097c6, #008ec7, #0085c8, #0c7bc6, #2b70c3)',
      }}
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, color: 'inherit' }}>
          <Link to="/" className={GlobalCSS.nostyleLink}>
            Intentional Society
          </Link>
        </Typography>
        <Button
          component={Link}
          to="/about"
          sx={{
            textTransform: 'inherit',
            color: 'inherit',
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/get-involved"
          sx={{
            textTransform: 'inherit',
            color: 'inherit',
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          Get Involved
        </Button>
        <Button
          onClick={event => setSpacesAnchor(event.currentTarget)}
          sx={{
            textTransform: 'inherit',
            color: 'inherit',
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          Spaces <ArrowDropDown fontSize="small" />
        </Button>

        <Menu
          anchorEl={spacesAnchor}
          open={Boolean(spacesAnchor)}
          onClose={() => setSpacesAnchor(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem
            onClick={() => {
              setSpacesAnchor(null)
              navigate('/dojo')
            }}
          >
            Dojo
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSpacesAnchor(null)
              navigate('/community')
            }}
          >
            Community
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSpacesAnchor(null)
              navigate('/iv')
            }}
          >
            Ventures
          </MenuItem>
        </Menu>
        <Button
          component={Link}
          to="/history"
          sx={{
            textTransform: 'inherit',
            color: 'inherit',
            display: { xs: 'none', sm: 'inline-flex' },
          }}
        >
          History
        </Button>
        <Button
          component={Link}
          to="/friends"
          sx={{
            textTransform: 'inherit',
            color: 'inherit',
            display: { xs: 'none', lg: 'inline-flex' },
          }}
        >
          Friends
        </Button>
        <Button
          component={Link}
          to="/questions"
          sx={{
            textTransform: 'inherit',
            color: 'inherit',
            display: { xs: 'none', lg: 'inline-flex' },
          }}
        >
          Questions?
        </Button>
        <Button
          component={Link}
          to="/resources"
          sx={{
            textTransform: 'inherit',
            color: 'inherit',
            display: { xs: 'none', lg: 'inline-flex' },
          }}
        >
          Resources
        </Button>
        <IconButton
          aria-controls="top-nav-menu"
          aria-haspopup="true"
          aria-label="menu"
          onClick={handleClick}
          sx={{
            color: 'inherit',
            display: { xs: 'inline-flex', lg: 'none' },
          }}
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
          sx={{ display: { lg: 'none' } }}
        >
          <MenuItem
            component={Link}
            to="/about"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            About
          </MenuItem>
          <MenuItem
            component={Link}
            to="/get-involved"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            Get Involved!
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
            to="/community"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            Community
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
            to="/history"
            onClick={handleClose}
            sx={{ display: { sm: 'none' } }}
          >
            History
          </MenuItem>
          <MenuItem component={Link} to="/friends" onClick={handleClose}>
            Friends
          </MenuItem>
          <MenuItem component={Link} to="/questions" onClick={handleClose}>
            Questions?
          </MenuItem>
          <MenuItem component={Link} to="/resources" onClick={handleClose}>
            Resources
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
export default NamedDefault
