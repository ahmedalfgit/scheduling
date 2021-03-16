import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import logo from '../assests/logo.jpg'
import logoMobile from '../assests/logo-mobile.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function Logo(props) {
  const classes = useStyles();
  return (
   <div className={clsx(classes.root, "pt-md-5 pb-md-5")}>
     <Grid container spacing={0} className={"pt-md-5 pd-md-5 justify-center logo-container"}>
     <Grid item xs={12} sm={10} md={5} className="logo-col">
          <picture className="w-100">
                  <source className="w-100" media="(max-width: 600px)" srcSet={logoMobile}/>
                  <source media="(max-width: 1200px)" srcSet={logo}/>
                  <img className="w-100 logo" src={logo} alt="logo icon"></img>
          </picture>
       </Grid>
       <Grid item xs={12} sm={10} md={5} className="content-section mb-5 logo-content-col">
         <h2 className="logo-h2 text-right mt-md-5">(الشعار (العلامة التسويقية</h2>
         <p className="logo-p text-right">
         سوف يتذكرك مرضاك بالشعار الفريد الذي سنصممه لك، سنضيف شعارك إلى موقعك على شبكة الإنترنت وإلى بطاقة الأعمال الخاصة بك وسوف نقوم بتصديرها للطباعة الورقية
         </p>
         <ul className="list logo-list">
           <li className="item">
           يمكنك إضافته إلى بطاقة العمل الخاصة بك           
           </li>
           <li className="item">
           إضافته إلى شعار عيادتك        
           </li>
           <li className="item">
           إضافته إلى موقعك الإلكتروني      
           </li>
         </ul>
       </Grid>
     </Grid>
   </div>
  );
}

export default Logo;