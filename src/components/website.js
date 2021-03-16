import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import website from '../assests/website.jpg'
import websiteMobile from '../assests/website-mobile.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function Website(props) {
  const classes = useStyles();
  return (
   <div className={clsx(classes.root, "pt-md-5 pb-md-5")}>
     <Grid container spacing={0} className={"pt-md-5 pb-md-5 justify-center website-container"}>
       <Grid item xs={12} sm={10} md={5} className="content-section mb-5 website-content-col">
         <h2 className="website-h2 text-right mt-md-5">الموقع الألكتروني</h2>
         <p className="website-p text-right">
         سنستخدم أحدث التقنيات لتطوير موقع إلكتروني لك أو لعيادتك، موقع إلكتروني يعرض كل إنجازاتك والعمليات الجراحية الناجحة، وسوف تختار اسم موقع الويب الخاص بك
         </p>
         <ul className="list website-list">
           <li className="item">
           عرض المعلومات المهمة          
           </li>
           <li className="item">
           التواصل مع المرضى        
           </li>
           <li className="item">
           معرفة الحالة الصحية لكل مريض      
           </li>
         </ul>
       </Grid>
       <Grid item xs={12} sm={10} md={5} className="website-logo-col">
          <picture className="w-100">
                  <source className="w-100" media="(max-width: 600px)" srcSet={websiteMobile}/>
                  <source media="(max-width: 1200px)" srcSet={website}/>
                  <img className="w-100 website-logo" src={website} alt="website logo"></img>
            </picture>
       </Grid>
     </Grid>
   </div>
  );
}

export default Website;