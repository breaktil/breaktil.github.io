import React from 'react';
import HomePageStyle from './HomePageStyle';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import {Button, TextField, withStyles} from '@material-ui/core';
import {AttachMoney, AccessAlarm, OfflineBolt, ThumbUpAlt, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const HomePage = props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Navbar/>
      <div className={classes.headerContainer}>
        <p className={classes.headerTitle}>
          Website Title Goes Here
        </p>
        <p className={classes.headerSubtitle}>
          Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
        </p>
      <NavLink to="/contact" className={classes.removeDefaultLinkStyles}>
          <Button className={classes.contactButton} variant={'contained'}>
          Contact Now
        </Button>
      </NavLink>
      </div>

      <div className={classes.rowContainer}>
        <div className={classes.leftRowContainer}>
          <AttachMoney className={classes.leftIcon}/>
          <p className={classes.leftTitle}>
            Fixed Prices
          </p>
          <p className={classes.leftSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
        </div>
        <div className={classes.middleRowContainer}>
          <AccessAlarm className={classes.middleIcon}/>
          <p className={classes.middleTitle}>
            Receive on Time
          </p>
          <p className={classes.middleSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
        </div>
        <div className={classes.rightRowContainer}>
          <OfflineBolt className={classes.rightIcon}/>
          <p className={classes.rightTitle}>
            Fast work turnaround
          </p>
          <p className={classes.rightSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
        </div>
      </div>

      <div className={classes.designContainer}>
        <div className={classes.designImageContainer}>
          <img className={classes.designImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template5.jpg'}/>
        </div>
        <div className={classes.designTextContainer}>
          <p className={classes.designTitle}>
            Web design
          </p>
          <p className={classes.designSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <Button className={classes.designButton} variant={'contained'}>
            Learn More
          </Button>
        </div>
      </div>

      <div className={classes.brandingContainer}>
        <div className={classes.brandingImageContainer}>
          <img className={classes.brandingImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template_1.jpg'}/>
        </div>
        <div className={classes.brandingTextContainer}>
          <p className={classes.brandingTitle}>
            Branding
          </p>
          <p className={classes.brandingSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <Button className={classes.brandingButton} variant={'contained'}>
            Learn More
          </Button>
        </div>
      </div>

      <div className={classes.valueContainer}>
        <div className={classes.valueImageContainer}>
          <img className={classes.valueImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template_image.jpg'}/>
        </div>
        <div className={classes.valueTextContainer}>
          <p className={classes.valueTitle}>
            We are driven by values
          </p>
          <p className={classes.valueSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <Button className={classes.valueButton} variant={'contained'}>
            Learn More
          </Button>
        </div>
      </div>

      <div className={classes.testimonialRowContainer}>
        <div className={classes.testimonialLeftContainer}>
          <div className={classes.testimonialLeftImage}>
          </div>
          <p className={classes.testimonialLeftSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <p className={classes.testimonialLeftTitle}>
            Hannah Moore
          </p>
        </div>
        <div className={classes.testimonialMiddleContainer}>
          <div className={classes.testimonialMiddleImage}>
          </div>
          <p className={classes.testimonialMiddleSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <p className={classes.testimonialMiddleTitle}>
            Joe Smith
          </p>
        </div>
        <div className={classes.testimonialRightContainer}>
          <div className={classes.testimonialRightImage}>
          </div>
          <p className={classes.testimonialRightSubtitle}>
            Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
          </p>
          <p className={classes.testimonialRightTitle}>
            Daniel Oliver
          </p>
        </div>
      </div>

      <div className={classes.workTogetherContainer}>
        <p className={classes.workTogetherTitle}>
          Let's work together
        </p>
        <p className={classes.workTogetherSubtitle}>
          Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
        </p>
      <NavLink to="/contact" className={classes.removeDefaultLinkStyles}>
          <Button className={classes.workTogetherButton} variant={'contained'}>
          Contact Now
        </Button>
      </NavLink>
      </div>

      <div className={classes.featuredWorkContainer}>
        <p className={classes.featuredWorkTitle}>
          Featured Work
        </p>
        <div className={classes.featuredWorkRowContainer}>
          <div className={classes.featuredLeftContainer}>
            <img className={classes.featuredLeftImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template7.jpg'}/>
          </div>
          <div className={classes.featuredRightContainer}>
            <img className={classes.featuredRightImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template6.jpg'}/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};


export default withStyles(HomePageStyle)(HomePage);