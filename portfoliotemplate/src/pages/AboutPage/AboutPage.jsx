import React from 'react';
import AboutPageStyle from './AboutPageStyle';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import {Button, TextField, withStyles} from '@material-ui/core';
import {AttachMoney, AccessAlarm, OfflineBolt, ThumbUpAlt, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const AboutPage = props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Navbar/>
      <div className={classes.aboutHeaderContainer}>
        <p className={classes.aboutHeaderTitle}>
          About Us
        </p>
      </div>

      <div className={classes.ourStoryContainer}>
        <div className={classes.ourStoryImageContainer}>
          <img className={classes.ourStoryImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template_image.jpg'}/>
        </div>
        <div className={classes.ourStoryTextContainer}>
          <p className={classes.ourStoryTitle}>
            Our Story
          </p>
          <p className={classes.ourStorySubtitle1}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor. Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <p className={classes.ourStorySubtitle2}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor. Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
        </div>
      </div>

      <div className={classes.aboutValueContainer}>
        <div className={classes.aboutValueImageContainer}>
          <img className={classes.aboutValueImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template6.jpg'}/>
        </div>
        <div className={classes.aboutValueTextContainer}>
          <p className={classes.aboutValueTitle}>
            We are driven by values
          </p>
          <p className={classes.aboutValueSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <Button className={classes.aboutValueButton} variant={'contained'}>
            Learn More
          </Button>
        </div>
      </div>

      <div className={classes.benefitRowContainer}>
        <div className={classes.benefitLeftContainer}>
          <ThumbUpAlt className={classes.benefitLeftIcon}/>
          <p className={classes.benefitLeftTitle}>
            Efficient
          </p>
          <p className={classes.benefitLeftSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
        </div>
        <div className={classes.benefitMiddleContainer}>
          <ThumbUpAlt className={classes.benefitMiddleIcon}/>
          <p className={classes.benefitMiddleTitle}>
            Commited
          </p>
          <p className={classes.benefitMiddleSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
        </div>
        <div className={classes.benefitRightContainer}>
          <ThumbUpAlt className={classes.benefitRightIcon}/>
          <p className={classes.benefitRightTitle}>
            Skilled
          </p>
          <p className={classes.benefitRightSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
        </div>
      </div>

      <div className={classes.employeeRowContainer}>
        <div className={classes.employeeLeftContainer}>
          <div className={classes.employeeLeftImageContainer}>
          </div>
          <p className={classes.employeeLeftTitle}>
            Hannah Moore
          </p>
          <p className={classes.employeeLeftSubtitle}>
            Designer
          </p>
        </div>
        <div className={classes.employeeMiddleContainer}>
          <div className={classes.employeeMiddleImageContainer}>
          </div>
          <p className={classes.employeeMiddleTitle}>
            Joe Smith
          </p>
          <p className={classes.employeeMiddleSubtitle}>
            Developer
          </p>
        </div>
        <div className={classes.employeeRightContainer}>
          <div className={classes.employeeRightImageContainer}>
          </div>
          <p className={classes.employeeRightTitle}>
            Daniel Oliver
          </p>
          <p className={classes.employeeRightSubtitle}>
            Project Manager
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  );
};


export default withStyles(AboutPageStyle)(AboutPage);