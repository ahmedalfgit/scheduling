import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import BookingImg from '../assests/booking.jpg'
import BookingImgMobile from '../assests/booking-mobile.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function Booking(props) {
  const classes = useStyles();
  return (
   <div className={clsx(classes.root, "pt-md-5 pb-md-5")}>
     <Grid container spacing={0} className={"pt-md-5 pb-md-5 justify-center booking-container"}>
     <Grid item xs={12} sm={10} md={5} className="booking-logo-col">
       <picture className="w-100">
          <source className="w-100" media="(max-width: 600px)" srcSet={BookingImgMobile}/>
          <source media="(max-width: 1200px)" srcSet={BookingImg}/>
          <img className={"w-100 booking-logo"} src={BookingImg} alt="booking logo"></img>
       </picture>
       </Grid>
       <Grid item xs={12} sm={10} md={4} className="content-section mb-5 booking-content-col pr-md-4">
         <h2 className="booking-h2 text-right mt-md-5">الحجز عن طريق الموقع</h2>
         <p className="booking-p text-right">
         العمل ضمن جدولك هو حرية، دعنا نقدم لك هذه الحرية، سيتمكن مرضاك من حجز المواعيد خلال دقيقة، وسيظهر لك التقويم الشخصي تاريخ ووقت كل موعد، للاستفادة من كل دقيقة في يومك
         </p>
         {/* <ul className="list booking-list">
           <li className="item">
           حجز مواعيد خلال دقيقة
           </li>
           <li className="item">
           العمل ضمن جدولك المحدد         
           </li>
         </ul> */}
       </Grid>
     </Grid>
   </div>
  );
}

export default Booking;