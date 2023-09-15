const PortfolioPageStyle = theme => ({
  root: {
    flex: 1,
    flexWrap: 'wrap',
    minHeight: '100vh',
    backgroundColor: '#181A1E',
  },

  portfolioHeaderContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '300px',
    paddingLeft: '100px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      paddingLeft: '0px',
    },
  },

  portfolioHeaderTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
    },
  },

  upperOuterPortfolioContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '1000px',
    paddingBottom: '50px',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '50px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: '1800px',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '1400px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
    },
  },

  upperInnerPortfolioContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  upperLeftPortfolioContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: '100%',
    paddingRight: '50px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '50px',
      paddingRight: '0px',
      width: '100%',
    },
  },

  upperLeftPortfolioImage: {
    border: 'solid 0px #FFFFFF',
    display: 'flex',
    height: '550px',
    width: '550px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  upperLeftPortfolioTextContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'auto',
    paddingBottom: '0px',
    paddingTop: '20px',
    width: '550px',

    [theme.breakpoints.down('md')]: {
      height: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  upperLeftPortfolioTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  upperLeftPortfolioSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '140px',
    marginBottom: '20px',
    textAlign: 'center',
    width: '346.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '174px',
      width: '238.4px',
    },
  },

  upperLeftPortfolioButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '195.9px',
  },

  upperRightPortfolioContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: '50px',
    paddingRight: '0px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      paddingLeft: '0px',
    },
  },

  upperRightPortfolioImage: {
    display: 'flex',
    height: '550px',
    width: '550px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  upperRightPortfolioTextContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'auto',
    paddingBottom: '20px',
    paddingTop: '20px',
    width: '550px',

    [theme.breakpoints.down('md')]: {
      height: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  upperRightPortfolioTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  upperRightPortfolioSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '140px',
    marginBottom: '20px',
    textAlign: 'center',
    width: '311.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '174px',
      width: '238.4px',
    },
  },

  upperRightPortfolioButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '195.9px',
  },

  lowerOuterPortfolioContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '1000px',
    paddingBottom: '50px',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '50px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      height: '1800px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '1400px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
    },
  },

  lowerOuterInnerPortfolioContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 'auto',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  lowerLeftPortfolioContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: '100%',
    paddingRight: '50px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '50px',
      paddingRight: '0px',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },

  lowerLeftPortfolioImage: {
    display: 'flex',
    height: '550px',
    width: '550px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  lowerLeftPortfolioTextContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'auto',
    paddingBottom: '20px',
    paddingTop: '20px',
    width: '550px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  lowerLeftPortfolioTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  lowerLeftPortfolioSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '140px',
    marginBottom: '20px',
    textAlign: 'center',
    width: '346.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '174px',
      width: '275.7px',
    },
  },

  lowerLeftPortfolioButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '195.9px',
  },

  lowerRightPortfolioContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: '50px',
    paddingRight: '0px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      paddingLeft: '0px',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },

  lowerRightPortfolioImage: {
    display: 'flex',
    height: '550px',
    width: '550px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  lowerRightPortfolioTextContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'auto',
    paddingBottom: '20px',
    paddingTop: '20px',
    width: '550px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  lowerRightPortfolioTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  lowerRightPortfolioSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '140px',
    marginBottom: '20px',
    textAlign: 'center',
    width: '311.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '174px',
      width: '275.7px',
    },
  },

  lowerRightPortfolioButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '195.9px',
  },
})

export default PortfolioPageStyle;