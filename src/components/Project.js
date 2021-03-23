import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Vcita from './vCitaSec'
import Booking from './booking'
import Barcode from './barcode'
import BusinessCard from './businessCard'
import Website from './website'
import Logo from './logo'
import Form from './form'

//images
import HomePageIcon from "../assests/homePage-icon.png";
import HomePageIconMobile from "../assests/homePage-icon-mobile.png";
import HomePageMidIcon from "../assests/homePage-mid-icon.png";
import NumOne from "../assests/num-one.png";
import NumTwo from "../assests/num-two.png";
import NumThree from "../assests/num-three.png";
import NumFour from "../assests/num-four.png";
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const FullWidthGrid = (props) => {
  const classes = useStyles();
  const { history } = props;

  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorE1(null);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={"pt-md-5 mt-md-5 homePage-container"}>
        <Grid item xs={12} sm={6} md={5} className="homepage-icon-col">
        <picture className="w-100">
                  <source className="w-100" media="(max-width: 600px)" srcSet={HomePageIconMobile}/>
                  <source media="(max-width: 1200px)" srcSet={HomePageIcon}/>
                  <img className="homePage-icon w-100" src={HomePageIcon} alt="homepage change Icon"></img>
            </picture>
        </Grid>
        <Grid item md={3} sm={3} xs={5} className="homePage-mid-icon-col">
          <img src={HomePageMidIcon} alt="home page mid icon" className="homePage-mid-icon w-100"/>
        </Grid>
        <Grid item xs={12} sm={8} md={3} className="homePage-content-col">
          <div className="mission-section pt-xs-5">
            <h1 className="statement-h1">
              التغير اسهل معنا
            </h1>
            <p className="statement-p">أنظم الان وتمتع بمختلف البرامج
              للتواصل مع مراجعيك</p>
            <button className="enroll-btn" onClick={() => handleMenuClick('/prices')}>اشترك</button>
          </div>
        </Grid>
        <Grid item md={12} xs={12} sx={12} className="pt-md-5 pt-sm-5 pb-md-5 pb-sm-5 four-steps-container-col">
          <Grid container spacing={0} className="justify-center four-steps-container pb-md-5 pb-xs-5 pb-mt-5 mt-xs-2">
            <Grid item md={12} xs={12} sx={12} className="four-steps-title-col">
              <h2 className="four-steps-title-h2 text-right">
                حجز مواعيد بأربع خطوات
              </h2>
            </Grid>
          <Grid item md={1} sx={4} xs={3} className="num-8">
              <p className="step-p text-right">
              أستقبل حجوزات المراجعين
              </p>
            </Grid>
            <Grid item md={1} sx={4} xs={3} className="num-7">
              <img src={NumFour} alt="number Four" className="w-100"/>
            </Grid>
            <Grid item md={1} sx={4} xs={3} className="num-6">
              <p className="step-p text-right">
              أضف رابط الحجز لموقع
              عيادتك / الفيس بوك
              </p>
            </Grid>
            <Grid item md={1} sx={4} xs={3} className="num-5">
              <img src={NumThree} alt="number Three" className="w-100"/>
            </Grid>
            <Grid item md={1} sx={4} xs={3} className="num-4">
              <p className="step-p text-right">
              أضافة اوقات الحجز
              </p>
            </Grid>
            <Grid item md={1} sx={4} xs={3} className="num-3">
              <img src={NumTwo} alt="number Two" className="w-100"/>
            </Grid>
            <Grid item md={1} sx={4} xs={3} className="num-2">
              <p className="step-p text-right">
              أنشاء حساب
              </p>
            </Grid>
            <Grid item md={1} sx={4} xs={3} className="num-1">
              <img src={NumOne} alt="number one" className="w-100"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className="white-bg mt-xs-2">
          <Vcita/>
        </Grid>
        <Grid item xs={12} sm={12} className="mt-xs-5">
          <Booking/>
        </Grid>
        <Grid item xs={12} sm={12} className="white-bg mt-xs-5">
          <Barcode/>
        </Grid>
        <Grid item xs={12} sm={12} className="mt-xs-5">
          <BusinessCard/>
        </Grid>
        <Grid item xs={12} sm={12} className="white-bg mt-xs-5">
          <Website/>
        </Grid>
        <Grid item xs={12} sm={12} className="my-xs-5">
          <Logo/>
        </Grid>
        {/* <Grid item xs={12} sm={12} className="my-xs-5">
          <Form/>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default withRouter(FullWidthGrid);