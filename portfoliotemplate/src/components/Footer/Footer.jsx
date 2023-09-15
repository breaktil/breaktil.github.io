import React from 'react';
import FooterStyle from './FooterStyle';
import {Button, TextField, withStyles} from '@material-ui/core';
import {Twitter, Facebook, Instagram, YouTube, LinkedIn, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const Footer = props => {
  const {classes} = props;

  return (
    <div className={classes.footerContainer} ownedByUser={true}>
      <div className={classes.footerLinkContainer}>
        <p className={classes.linksTitle}>
          Links
        </p>
      <NavLink to="/" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerHomeLink}>
          Home
        </p>
      </NavLink>
      <NavLink to="/about" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerAboutLink}>
          About
        </p>
      </NavLink>
      <NavLink to="/portfolio" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerPortfolioLink}>
          Portfolio
        </p>
      </NavLink>
      <NavLink to="/contact" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerContactLink}>
          Contact
        </p>
      </NavLink>
      </div>
      <div className={classes.formContainer}>
        <p className={classes.formTitle}>
          Contact Form
        </p>
        <form className={classes.contactForm}>
          <TextField 
            className={classes.nameInput}
            variant={'outlined'}
            fullWidth={false}
            label={'Name'}
            name={'name'}
            placeholder={'Name'}
          />
          <TextField 
            className={classes.emailInput}
            variant={'outlined'}
            fullWidth={false}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <TextField 
            className={classes.messageInput}
            variant={'outlined'}
            fullWidth={false}
            label={'Message'}
            name={'message'}
            placeholder={'Message'}
          />
          <Button className={classes.submitMessageButton} variant={'contained'} type={'submit'}>
            Submit Message
          </Button>
        </form>
      </div>
      <div className={classes.outerLinkContainer}>
        <div className={classes.footerLogoContainer}>
          <p className={classes.footerLogo}>
            LOGO
          </p>
        </div>
        <div className={classes.socialContainer}>
          <Twitter className={classes.twitterIconLink}/>
          <Facebook className={classes.facebookIconLink}/>
          <Instagram className={classes.instagramIconLink}/>
          <YouTube className={classes.youtubeIconLink}/>
          <LinkedIn className={classes.linkedinIconLink}/>
        </div>
      </div>
    </div>
  );
};


export default withStyles(FooterStyle)(Footer);