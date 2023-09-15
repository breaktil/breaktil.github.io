import React from 'react';
import NavbarStyle from './NavbarStyle';
import {Button, IconButton, withStyles} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const Navbar = props => {
  const {classes} = props;

  return (
    <div className={classes.navbarContainer} ownedByUser={true}>
      <IconButton className={classes.drawerIcon}>
        <Menu/>
      </IconButton>
      <div className={classes.logoContainer}>
        <p className={classes.Logo}>
          LOGO
        </p>
      </div>
      <div className={classes.linkContainer}>
      <NavLink to="/" className={classes.removeDefaultLinkStyles}>
          <p className={classes.homeLink}>
          Home
        </p>
      </NavLink>
      <NavLink to="/about" className={classes.removeDefaultLinkStyles}>
          <p className={classes.aboutLink}>
          About
        </p>
      </NavLink>
      <NavLink to="/portfolio" className={classes.removeDefaultLinkStyles}>
          <p className={classes.portfolioLink}>
          Portfolio
        </p>
      </NavLink>
      <NavLink to="/contact" className={classes.removeDefaultLinkStyles}>
          <Button className={classes.contactLinkButton} variant={'contained'}>
          Contact Now
        </Button>
      </NavLink>
      </div>
    </div>
  );
};


export default withStyles(NavbarStyle)(Navbar);