import React from 'react';
import PortfolioPageStyle from './PortfolioPageStyle';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import {Button, TextField, withStyles} from '@material-ui/core';
import {AttachMoney, AccessAlarm, OfflineBolt, ThumbUpAlt, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const PortfolioPage = props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Navbar/>
      <div className={classes.portfolioHeaderContainer}>
        <p className={classes.portfolioHeaderTitle}>
          Portfolio
        </p>
      </div>

      <div className={classes.upperOuterPortfolioContainer}>
        <div className={classes.upperInnerPortfolioContainer}>
          <div className={classes.upperLeftPortfolioContainer}>
            <img className={classes.upperLeftPortfolioImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template7.jpg'}/>
            <div className={classes.upperLeftPortfolioTextContainer}>
              <p className={classes.upperLeftPortfolioTitle}>
                Sample Website
              </p>
              <p className={classes.upperLeftPortfolioSubtitle}>
                Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
              </p>
              <Button className={classes.upperLeftPortfolioButton} variant={'contained'}>
                Visit Site
              </Button>
            </div>
          </div>
          <div className={classes.upperRightPortfolioContainer}>
            <img className={classes.upperRightPortfolioImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template6.jpg'}/>
            <div className={classes.upperRightPortfolioTextContainer}>
              <p className={classes.upperRightPortfolioTitle}>
                Sample Website
              </p>
              <p className={classes.upperRightPortfolioSubtitle}>
                Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
              </p>
              <Button className={classes.upperRightPortfolioButton} variant={'contained'}>
                Visit Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.lowerOuterPortfolioContainer}>
        <div className={classes.lowerOuterInnerPortfolioContainer}>
          <div className={classes.lowerLeftPortfolioContainer}>
            <img className={classes.lowerLeftPortfolioImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template_1.jpg'}/>
            <div className={classes.lowerLeftPortfolioTextContainer}>
              <p className={classes.lowerLeftPortfolioTitle}>
                Sample Website
              </p>
              <p className={classes.lowerLeftPortfolioSubtitle}>
                Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
              </p>
              <Button className={classes.lowerLeftPortfolioButton} variant={'contained'}>
                Visit Site
              </Button>
            </div>
          </div>
          <div className={classes.lowerRightPortfolioContainer}>
            <img className={classes.lowerRightPortfolioImage} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/template5.jpg'}/>
            <div className={classes.lowerRightPortfolioTextContainer}>
              <p className={classes.lowerRightPortfolioTitle}>
                Sample Website
              </p>
              <p className={classes.lowerRightPortfolioSubtitle}>
                Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor.
              </p>
              <Button className={classes.lowerRightPortfolioButton} variant={'contained'}>
                Visit Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};


export default withStyles(PortfolioPageStyle)(PortfolioPage);