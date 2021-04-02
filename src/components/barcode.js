import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import Phone from '../assests/phone.jpg'
import PhoneMobile from '../assests/phone-mobile.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function BarCode(props) {
  const classes = useStyles();
  return (
   <div className={clsx(classes.root, "pt-md-5 pb-md-5")}>
     <Grid container spacing={0} className={"pt-md-5 pb-md-5 justify-center barcode-container"}>
       <Grid item xs={12} sm={10} md={5}  className="content-section mb-5 barcode-content-col">
         <h2 className="barcode-h2 text-right mt-md-5">الحجز عن طريق المسحة الضوئية</h2>
         <p className="barcode-p text-right">
         حجز اسهل واسرع، قم بمسح الباركود عن طريق هاتفك واحجز موعد. أضف الباركود إلى بطاقة العمل الخاصة بك وموقعك الإلكتروني
         </p>
         {/* <ul className="barcode-list list">
           <li className="item">
           يمكن استخدامه في أي مكان وفي أي وقت
           </li>
           <li className="item">
           إضافته إلى بطاقة العمل الخاصة بك
           </li>
         </ul> */}
       </Grid>
       <Grid item xs={12} sm={10} md={5} className="barcode-logo-col">
          <picture className="w-100">
                  <source className="w-100" media="(max-width: 600px)" srcSet={PhoneMobile}/>
                  <source media="(max-width: 1200px)" srcSet={Phone}/>
                  <img className="phone w-100" src={Phone} alt="barcode-logo"></img>
          </picture>
       </Grid>
     </Grid>
   </div>
  );
}

export default BarCode;