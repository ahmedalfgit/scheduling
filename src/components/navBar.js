import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Helmet from "react-helmet";
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router';

//images
import logo from '../assests/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const NavBar = (props) => {
  const { history } = props;
  const [anchorE1, setAnchorE1] = React.useState(null);
  const open = Boolean(anchorE1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorE1(null);
  };

    return (
      <div>
        <Helmet>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Helmet>
      <div className="main-nav">
        <AppBar position="static" className="navBar-bg">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className="redIcon"
              onClick={() => handleMenuClick('/')}
            >
              <img src={logo} alt="red scheduling icon" className="red-scheduling-icon"></img>
            </IconButton>
            
            {isMobile ? (
              <>
              <IconButton
              edge="start"
              className="toggleMenu"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              >
                <MenuIcon/>
              </IconButton>
              <Menu
              id="menu-appbar"
              anchorE1={anchorE1}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorE1(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/prices')}>
                  اسعار
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/vcita')}>
                  vCita
                  </MenuItem>
              </Menu>
              </>
            ) : (
              <>
              <MenuItem color="dark" className="nav-bar-font mx-3 prices" onClick={() => handleMenuClick('/prices')}>
                  اسعار
                </MenuItem>
              <MenuItem color="dark" className="nav-bar-font mx-3 vcita" onClick={() => handleMenuClick('/vcita')}>
                  vCita
              </MenuItem>
            <Button className="enroll-btn nav-bar-font" color="inherit">
              اشترك الان
              <div className="elfsight-app-38d41f1d-12a1-4f33-a280-71371f5263dd"></div>
            </Button>
            </>
            )}
          </Toolbar>
        </AppBar>
      </div>
      
      </div>
    );
};

export default withRouter(NavBar);
