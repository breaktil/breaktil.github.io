const ContactPageStyle = theme => ({
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
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    height: '700px',
    width: '100%',
    backgroundImage: 'url("https://nimbus-media-bucket.s3.amazonaws.com/media/template3_h1HIZH2.jpg")',
  },

  headerTitle: {
    display: 'flex',
    color: '#000000',
    fontFamily: 'Roboto',
    margin: '0',
    fontSize: '80px',
    fontWeight: '600',
    height: '101px',
    marginBottom: '30px',
    textAlign: 'center',
    width: '451.1px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
      height: '63px',
      width: '272.7px',
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
})

export default ContactPageStyle;