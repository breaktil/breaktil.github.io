const Footer = theme => ({
  footerContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginTop: '0px',
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '100%',
    },
  },

  footerLinkContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '25%',

    [theme.breakpoints.down('md')]: {
      paddingBottom: '50px',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      paddingBottom: '10px',
    },
  },

  linksTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '38px',
    marginBottom: '25px',
    width: '77.3px',
  },

  footerHomeLink: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    fontWeight: '400',
    marginBottom: '15px',
    transition: '0.3s',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  footerAboutLink: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    marginBottom: '15px',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  footerPortfolioLink: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    marginBottom: '15px',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  footerContactLink: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    marginBottom: '15px',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  formContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    marginLeft: 'auto',
    width: '25%',

    [theme.breakpoints.down('md')]: {
      paddingBottom: '50px',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      paddingTop: '50px',
    },
  },

  formTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '41.3px',
    marginBottom: '25px',
    width: '198.4px',
  },

  contactForm: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },

  nameInput: {
    display: 'flex',
    marginBottom: '20px',
    width: '100%',

    '& input': {
      color: '#000000',
    },

    '& fieldset': {
      borderColor: '#000000 !important',
    },

    '&:hover fieldset': {
      borderColor: '#000000 !important,'
    },

    '& label': {
      color: '#000000 !important',

      '&.Mui-focused': {
        color: '#000000 !important'
      }
    },
  },

  emailInput: {
    display: 'flex',
    marginBottom: '20px',
    width: '100%',

    '& input': {
      color: '#000000',
    },

    '& fieldset': {
      borderColor: '#000000 !important',
    },

    '&:hover fieldset': {
      borderColor: '#000000 !important,'
    },

    '& label': {
      color: '#000000 !important',

      '&.Mui-focused': {
        color: '#000000 !important'
      }
    },
  },

  messageInput: {
    display: 'flex',
    marginBottom: '20px',
    width: '100%',

    '& input': {
      color: '#000000',
    },

    '& fieldset': {
      borderColor: '#000000 !important',
    },

    '&:hover fieldset': {
      borderColor: '#000000 !important,'
    },

    '& label': {
      color: '#000000 !important',

      '&.Mui-focused': {
        color: '#000000 !important'
      }
    },
  },

  submitMessageButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
  },

  outerLinkContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    marginLeft: 'auto',
    width: '25%',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  footerLogoContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '34px',
    width: '100%',
  },

  footerLogo: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginLeft: '8px',
  },

  socialContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '60px',
    marginTop: '25px',
    width: '480px',
  },

  twitterIconLink: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginRight: '5px',
    transition: '0.3s',
  },

  facebookIconLink: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginRight: '5px',
    transition: '0.3s',
  },

  instagramIconLink: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginRight: '5px',
    transition: '0.3s',
  },

  youtubeIconLink: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginRight: '5px',
    transition: '0.3s',
  },

  linkedinIconLink: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
  },
})

export default Footer;