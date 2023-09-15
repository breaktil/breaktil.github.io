const HomePageStyle = theme => ({
  root: {
    flex: 1,
    flexWrap: 'wrap',
    minHeight: '100vh',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#181A1E',
  },

  headerContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '576.8px',
    width: '100%',
    backgroundImage: 'url("https://nimbus-media-bucket.s3.amazonaws.com/media/template3.jpg")',

    [theme.breakpoints.down('md')]: {
      height: '700px',
    },

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'top left',
      height: '800px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
      backgroundImage: 'url("https://nimbus-media-bucket.s3.amazonaws.com/media/template3_h1HIZH2.jpg")',
    },
  },

  headerTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    height: '195.3px',
    marginBottom: '30px',
    textAlign: 'center',
    width: '472.8px',

    [theme.breakpoints.down('md')]: {
      width: '676.8px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
      height: '119.3px',
      width: '285px',
    },
  },

  headerSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '400',
    height: '117.3px',
    marginBottom: '30px',
    textAlign: 'center',
    width: '522.8px',

    [theme.breakpoints.down('md')]: {
      height: '79.3px',
      width: '673.1px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
      height: '139.3px',
      width: '310.8px',
    },
  },

  contactButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    transition: '0.3s',
    width: '175.9px',
  },

  /* This class removes the default underlines and colors for links, which are usually undesirable */
  removeDefaultLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
  },

  rowContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '100%',
    },
  },

  leftRowContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginBottom: '10px',
    width: '33.33%',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  leftIcon: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginBottom: '20px',
  },

  leftTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  leftSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '139.3px',
    textAlign: 'center',
    width: '310.8px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      height: '111.3px',
      width: '272.4px',
    },
  },

  middleRowContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginBottom: '10px',
    width: '33.33%',

    [theme.breakpoints.down('md')]: {
      width: '640px',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  middleIcon: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginBottom: '20px',
  },

  middleTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  middleSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '139.3px',
    textAlign: 'center',
    width: '345.7px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      height: '111.3px',
      width: '272.4px',
    },
  },

  rightRowContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    marginBottom: '10px',
    width: '33.33%',
  },

  rightIcon: {
    color: '#000000',
    width: '50px',
    height: '50px',
    display: 'flex',
    marginBottom: '20px',
  },

  rightTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '41.3px',
    marginBottom: '20px',
    width: '309.6px',
  },

  rightSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '139.3px',
    textAlign: 'center',
    width: '345.7px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      height: '111.3px',
      width: '272.4px',
    },
  },

  designContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '700px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1000px',
    },
  },

  designImageContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '500px',
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  },

  designImage: {
    display: 'flex',
    height: '450px',
    width: '600px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  designTextContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: '30px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      height: '500px',
      paddingLeft: '0px',
      paddingTop: '0px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },

  designTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    marginBottom: '30px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
    },
  },

  designSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '139.4px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '299.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      textAlign: 'center',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '173px',
      width: '239.4px',
    },
  },

  designButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '175.9px',
  },

  brandingContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '700px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1000px',
    },
  },

  brandingImageContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '500px',
    },
  },

  brandingImage: {
    display: 'flex',
    height: '450px',
    width: '600px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  brandingTextContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '700px',
    paddingLeft: '30px',
    paddingRight: '30px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      height: '500px',
      paddingLeft: '0px',
    },
  },

  brandingTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    marginBottom: '30px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
    },
  },

  brandingSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '174px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '297.7px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      textAlign: 'center',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '175px',
      width: '276.7px',
    },
  },

  brandingButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '175.9px',
  },

  valueContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '700px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1000px',
    },
  },

  valueImageContainer: {
    backgroundColor: '#14171C',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '700px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '500px',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  },

  valueImage: {
    display: 'flex',
    height: '450px',
    width: '600px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  valueTextContainer: {
    backgroundColor: '#14171C',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: '30px',
    width: '50%',

    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      height: '500px',
      width: '100%',
    },
  },

  valueTitle: {
    display: 'flex',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    height: '197px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '599.5px',

    [theme.breakpoints.down('md')]: {
      height: '195.3px',
      textAlign: 'center',
      width: '597.9px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
      height: '121px',
      width: '298.9px',
    },
  },

  valueSubtitle: {
    display: 'flex',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '141px',
    marginBottom: '30px',
    textAlign: 'left',
    width: '292.8px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      textAlign: 'center',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '141px',
      width: '292.8px',
    },
  },

  valueButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '175.9px',
  },

  testimonialRowContainer: {
    backgroundColor: '#DBDCDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: '1500px',
    },
  },

  testimonialLeftContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '10px',
    width: '33.33%',
  },

  testimonialLeftImage: {
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

  testimonialLeftSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '141px',
    textAlign: 'center',
    width: '312.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '141px',
      width: '292.8px',
    },
  },

  testimonialLeftTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '41.3px',
    marginBottom: '0px',
    marginTop: '20px',
    width: '214.9px',
  },

  testimonialMiddleContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '10px',
    width: '33.33%',
  },

  testimonialMiddleImage: {
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

  testimonialMiddleSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '141px',
    textAlign: 'center',
    width: '312.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '175px',
      width: '239.4px',
    },
  },

  testimonialMiddleTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '38px',
    marginBottom: '0px',
    marginTop: '20px',
    width: '176.5px',
  },

  testimonialRightContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginBottom: '10px',
    width: '33.33%',
  },

  testimonialRightImage: {
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

  testimonialRightSubtitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    height: '141px',
    textAlign: 'center',
    width: '312.4px',

    [theme.breakpoints.down('md')]: {
      height: '105.3px',
      width: '457.9px',
    },

    [theme.breakpoints.down('sm')]: {
      height: '175px',
      width: '276.7px',
    },
  },

  testimonialRightTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '32px',
    fontWeight: '600',
    height: '38px',
    marginBottom: '0px',
    marginTop: '20px',
    width: '189.4px',
  },

  workTogetherContainer: {
    backgroundColor: '#14171C',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '700px',
    width: '100%',
  },

  workTogetherTitle: {
    display: 'flex',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    height: '101px',
    marginBottom: '30px',
    textAlign: 'center',
    width: '689.1px',

    [theme.breakpoints.down('md')]: {
      height: '99.3px',
      width: '687.4px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
      height: '121px',
      width: '221px',
    },
  },

  workTogetherSubtitle: {
    display: 'flex',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '28px',
    fontWeight: '400',
    height: '73px',
    marginBottom: '30px',
    textAlign: 'center',
    width: '591.1px',

    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
      height: '79.3px',
      width: '673.1px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
      height: '175px',
      width: '239.4px',
    },
  },

  workTogetherButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    fontSize: '18px',
    height: '43.5px',
    width: '175.9px',
  },


  featuredWorkContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '850px',
    paddingBottom: '100px',
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingTop: '100px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      height: '1200px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      height: '1000px',
    },
  },

  featuredWorkTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    marginBottom: '20px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
    },
  },

  featuredWorkRowContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '554px',
    width: '1720px',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },

  featuredLeftContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    paddingRight: '50px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: '50px',
      paddingRight: '0px',
    },
  },

  featuredLeftImage: {
    border: 'solid 0px #FFFFFF',
    display: 'flex',
    height: '450px',
    width: '600px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },

  featuredRightContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    paddingLeft: '0px',
    paddingRight: '0px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '50px',
    },

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '50px',
    },
  },

  featuredRightImage: {
    display: 'flex',
    height: '450px',
    width: '600px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
      width: '300px',
    },
  },
})

export default HomePageStyle;