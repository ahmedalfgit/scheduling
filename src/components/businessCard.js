import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import businessCard from '../assests/business-card.jpg'
import businessCardMobile from '../assests/business-card-mobile.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function BusinessCard(props) {
  const classes = useStyles();
  return (
   <div className={clsx(classes.root, "pt-md-5 pb-md-5"
   )}>
     <Grid container spacing={0} className={"pt-md-5 pb-md-5 justify-center businessCard-container"}>
     <Grid item xs={12} sm={10} md={5} className="businessCard-logo-col">
        <picture className="w-100">
              <source className="w-100" media="(max-width: 600px)" srcSet={businessCardMobile}/>
              <source media="(max-width: 1200px)" srcSet={businessCard}/>
              <img className="w-100 businessCard-logo" src={businessCard} alt="booking logo"></img>
        </picture>
       </Grid>
       <Grid item xs={12} sm={10} md={4} className="content-section mb-5 businessCard-content-col">
         <h2 className="businessCard-h2 text-right mt-md-5">بطاقه اعمال</h2>
         <p className="businessCard-p text-right">
         أنت تستحق بطاقة عمل تحمل شعارك واسمك ومعلومات الاتصال الخاصة بك ورمز الباركود الخاص بك لحجز مواعيدك من خلال الإنترنت
         </p>
         {/* <ul className="list businessCard-list">
           <li className="item">
           عرض كل معلومات الاتصال الخاصة بك بحيث يسهل الوصول الى حجز المواعيد من خلال الإنترنت
           </li>
         </ul> */}
       </Grid>
     </Grid>
   </div>
  );
}

export default BusinessCard;