import React, { useState } from "react";
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import * as GlobalCSS from "../styles/global.module.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { navigate } from "gatsby";

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: theme.palette.secondary.main,
    opacity: "80%",
    backgroundImage: "radial-gradient(circle at 20% -150%, #5c9d93, #519f9a, #44a0a2, #36a1ab, #25a2b5, #109fbb, #009bc1, #0097c6, #008ec7, #0085c8, #0c7bc6, #2b70c3)",
  },
  menuButton: {
    color: "inherit",
    [theme.breakpoints.up('lg')]: { display: 'none', },
  },
  title: {
    flexGrow: 1,
    color: "inherit",
  },
  navButtons3: {
    textTransform: "inherit",
    color: "inherit",
    [theme.breakpoints.down('xs')]: { display: 'none', },
  },
  navButtons6: {
    textTransform: "inherit",
    color: "inherit",
    [theme.breakpoints.down('md')]: { display: 'none', },
  },
  navMenu3: {
    [theme.breakpoints.up('sm')]: { display: 'none', },
  },
  navMenu6: {
    [theme.breakpoints.up('lg')]: { display: 'none', },
  },
}));

const NamedDefault = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [spacesAnchor, setSpacesAnchor] = useState(null);
  const [historyAnchor, setHistoryAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link to="/" className={GlobalCSS.nostyleLink}>Intentional Society</Link>
        </Typography>
        <Button className={classes.navButtons3} component={Link} to="/about">About</Button>
        <Button className={classes.navButtons3} component={Link} to="/get-involved">Get Involved</Button>
        <Button
          className={classes.navButtons3}
          onClick={(event) => setSpacesAnchor(event.currentTarget)}
        >
          Spaces
        </Button>

        <Menu
          anchorEl={spacesAnchor}
          open={Boolean(spacesAnchor)}
          onClose={() => setSpacesAnchor(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={() => { setSpacesAnchor(null); navigate("/dojo"); }}>Dojo</MenuItem>
          <MenuItem onClick={() => { setSpacesAnchor(null); navigate("/community"); }}>Community</MenuItem>
          <MenuItem onClick={() => { setSpacesAnchor(null); navigate("/iv"); }}>Ventures</MenuItem>
        </Menu>
        <Button
          className={classes.navButtons3}
          onClick={(event) => setHistoryAnchor(event.currentTarget)}
        >
          History
        </Button>

        <Menu
          anchorEl={historyAnchor}
          open={Boolean(historyAnchor)}
          onClose={() => setHistoryAnchor(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          getContentAnchorEl={null}
        >
          <MenuItem component={Link} to="/history" onClick={() => setHistoryAnchor(null)}>History</MenuItem>
          <MenuItem onClick={() => { setHistoryAnchor(null); navigate("/thecall"); }}>The Call</MenuItem>
        </Menu>
        <Button className={classes.navButtons6} component={Link} to="/friends">Friends</Button>
        <Button className={classes.navButtons6} component={Link} to="/questions">Questions?</Button>
        <Button className={classes.navButtons6} component={Link} to="/resources">Resources</Button>
        <IconButton aria-controls="top-nav-menu" aria-haspopup="true" aria-label="menu"
                    className={classes.menuButton} onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="top-nav-menu"
          className={classes.navMenu6}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.navMenu3} component={Link} to="/about" onClick={handleClose}>About</MenuItem>
          <MenuItem className={classes.navMenu3} component={Link} to="/get-involved" onClick={handleClose}>Get Involved!</MenuItem>
          <MenuItem
            className={classes.navMenu3}
            onClick={(event) => setSpacesAnchor(event.currentTarget)}
          >
            Spaces
          </MenuItem>
          <Menu
            anchorEl={spacesAnchor}
            open={Boolean(spacesAnchor)}
            onClose={() => setSpacesAnchor(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            getContentAnchorEl={null}
          >
            <MenuItem onClick={() => { setSpacesAnchor(null); navigate("/dojo"); }}>Dojo</MenuItem>
            <MenuItem onClick={() => { setSpacesAnchor(null); navigate("/community"); }}>Community</MenuItem>
            <MenuItem onClick={() => { setSpacesAnchor(null); navigate("/iv"); }}>Ventures</MenuItem>
          </Menu>
          <MenuItem
            className={classes.navMenu3}
            onClick={(event) => setHistoryAnchor(event.currentTarget)}
          >
            History
          </MenuItem>
          <Menu
            anchorEl={historyAnchor}
            open={Boolean(historyAnchor)}
            onClose={() => setHistoryAnchor(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            getContentAnchorEl={null}
          >
            <MenuItem component={Link} to="/history" onClick={() => setHistoryAnchor(null)}>History</MenuItem>
            <MenuItem onClick={() => { setHistoryAnchor(null); navigate("/thecall"); }}>The Call</MenuItem>
          </Menu>
          <MenuItem component={Link} to="/friends" onClick={handleClose}>Friends</MenuItem>
          <MenuItem component={Link} to="/questions" onClick={handleClose}>Questions?</MenuItem>
          <MenuItem component={Link} to="/resources" onClick={handleClose}>Resources</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default NamedDefault;