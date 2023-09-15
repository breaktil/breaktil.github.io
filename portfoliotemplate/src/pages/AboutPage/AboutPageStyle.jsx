const AboutPageStyle = theme => ({
  root: {
    flex: 1,
    flexWrap: 'wrap',
    minHeight: '100vh',
    backgroundColor: '#181A1E',
  },

  aboutHeaderContainer: {
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

  aboutHeaderTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
      height: '62px',
      textAlign: 'center',
      width: '201.8px',
    },
  },

  ourStoryContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '700px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1200px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '1100px',
    },
  },

  ourStoryImageContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '100%',
    },
  },

  ourStoryImage: {
    display: 'flex',
    height: '450px',
    width: '600px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  ourStoryTextContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '700px',
    paddingLeft: '30px',
    width: '960px',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100%',
      paddingLeft: '0px',
      paddingTop: '30px',
      width: '100%',
    },
  },

  ourStoryTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    marginBottom: '30px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
      height: '62px',
      width: '207.7px',
    },
  },

  ourStorySubtitle1: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '242px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '343.8px',

    [theme.breakpoints.down('md')]: {
      height: '173.3px',
      textAlign: 'center',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
      height: '228px',
      width: '289.5px',
    },
  },

  ourStorySubtitle2: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '208px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '380.5px',

    [theme.breakpoints.down('md')]: {
      height: '173.3px',
      textAlign: 'center',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
      height: '228px',
      width: '289.5px',
    },
  },

  aboutValueContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '700px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1200px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '1100px',
    },
  },

  aboutValueImageContainer: {
    backgroundColor: '#14171C',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '600px',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },

  aboutValueImage: {
    display: 'flex',
    height: '450px',
    width: '600px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  aboutValueTextContainer: {
    backgroundColor: '#14171C',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: '30px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '0px',
      paddingTop: '30px',
      width: '100%',
    },
  },

  aboutValueTitle: {
    display: 'flex',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    height: '196px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '598.5px',

    [theme.breakpoints.down('md')]: {
      height: '195.3px',
      textAlign: 'center',
      width: '597.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
      height: '120px',
      width: '297.9px',
    },
  },

  aboutValueSubtitle: {
    display: 'flex',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '106px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '390.9px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      textAlign: 'center',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
      height: '132px',
      width: '271.3px',
    },
  },

  aboutValueButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '175.9px',
  },

  benefitRowContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1300px',
    },
  },

  benefitLeftContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginBottom: '10px',
    width: '100%',
  },

  benefitLeftIcon: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginBottom: '20px',
  },

  benefitLeftTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  benefitLeftSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '132px',
    textAlign: 'center',
    width: '289.5px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
      height: '132px',
      width: '289.5px',
    },
  },

  benefitMiddleContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginBottom: '10px',
    width: '100%',
  },

  benefitMiddleIcon: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginBottom: '20px',
  },

  benefitMiddleTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  benefitMiddleSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '140px',
    textAlign: 'center',
    width: '291.8px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
      height: '132px',
      width: '289.5px',
    },
  },

  benefitRightContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginBottom: '10px',
    width: '100%',
  },

  benefitRightIcon: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginBottom: '20px',
  },

  benefitRightTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  benefitRightSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '140px',
    textAlign: 'center',
    width: '346.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
      height: '132px',
      width: '322px',
    },
  },

  employeeRowContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1200px',
    },
  },

  employeeLeftContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '10px',
    width: '33.33%',
  },

  employeeLeftImageContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: '169.8px',
    marginBottom: '20px',
    width: '153.7px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTE0MDZ8MHwxfHNlYXJjaHw0fHx1c2VyfGVufDB8fHx8MTY1OTM4Nzg2Nw&ixlib=rb-1.2.1&q=80&w=400")',
  },

  employeeLeftTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '41.3px',
    marginBottom: '20px',
    marginTop: '0px',
    width: '214.9px',
  },

  employeeLeftSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '37.3px',
    textAlign: 'center',
    width: '113.2px',
  },

  employeeMiddleContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '10px',
    width: '33.33%',
  },

  employeeMiddleImageContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: '169.8px',
    marginBottom: '20px',
    width: '153.7px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTE0MDZ8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTY1OTM4Nzg2Nw&ixlib=rb-1.2.1&q=80&w=400")',
  },

  employeeMiddleTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '38px',
    marginBottom: '20px',
    marginTop: '0px',
    width: '176.5px',
  },

  employeeMiddleSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '37.3px',
    textAlign: 'center',
    width: '127.4px',
  },

  employeeRightContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '10px',
    width: '33.33%',
  },

  employeeRightImageContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: '169.8px',
    marginBottom: '20px',
    width: '153.7px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTE0MDZ8MHwxfHNlYXJjaHwyNHx8dXNlcnxlbnwwfHx8fDE2NTkzODc4Njc&ixlib=rb-1.2.1&q=80&w=400")',
  },

  employeeRightTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '38px',
    marginBottom: '20px',
    marginTop: '0px',
    width: '189.4px',
  },

  employeeRightSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '37.3px',
    textAlign: 'center',
    width: '208.8px',
  },
})

export default AboutPageStyle;