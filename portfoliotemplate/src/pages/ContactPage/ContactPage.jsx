import React from 'react';
import ContactPageStyle from './ContactPageStyle';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import {Button, TextField, withStyles} from '@material-ui/core';
import {AttachMoney, AccessAlarm, OfflineBolt, ThumbUpAlt, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const ContactPage = props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Navbar/>
      <div className={classes.headerContainer}>
        <p className={classes.headerTitle}>
          Get in Touch
        </p>
        <p className={classes.headerSubtitle}>
          Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
        </p>
      </div>

      <Footer/>
    </div>
  );
};


export default withStyles(ContactPageStyle)(ContactPage);