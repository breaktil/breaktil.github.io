const Navbar = theme => ({
  navbarContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    width: '100%',
  },

  drawerIcon: {
    color: '#000000',
    display: 'none',
    height: '70px',
    width: '70px',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      marginRight: 'auto',
    },

    [theme.breakpoints.down('sm')]: {
    },
  },

  logoContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '25%',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  Logo: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginLeft: '8px',

    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      marginRight: '70px',
    },
  },

  linkContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100',
    marginLeft: 'AUTO',
    width: '615.2px',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  homeLink: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    fontWeight: '600',
    marginRight: '20px',
    transition: '0.3s',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  aboutLink: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    fontWeight: '600',
    marginRight: '20px',
    transition: '0.3s',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  portfolioLink: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    fontWeight: '600',
    marginRight: '20px',
    transition: '0.3s',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  contactLinkButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    marginLeft: '0px',
    width: '182.9px',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

export default Navbar;