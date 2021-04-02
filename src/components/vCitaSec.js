import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import Vcita from '../assests/Vcita.jpg'
import VcitaMobile from '../assests/Vcita-mobile.jpg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function VcitaSvgCode(props) {
  const classes = useStyles();
  return (
   <div className={clsx(classes.root, "pt-md-5 mt-md-3 pb-md-5 mb-md-3")}>
     <Grid container spacing={0} className={"pt-md-5 justify-center vcita-container"}>
       <Grid item xs={12} sm={5} md={5} className="content-section mb-5 vcita-content-col pt-md-1 mr-md-4">
         <h2 className="vcita-h2 text-right mt-md-5">حساب لحفظ معلومات كل زياره</h2>
         <p className="vcita-p text-right first-vcita-p">
            لقد تشاركنا مع شركة  ( فسيتا ) لنوفر لك حساباً لحفظ معلومات المرضى، تحقق من معلومات المرضى واطلع على المواعيد القادمة والعلاج لكل مريض
         </p>
         
         {/* <ul className="list vcita-list">
           <li className="item">
           ضمان معرفة العلاج المستخدم في كل مراجعة
           </li>
           <li className="item">
           مراجعة المعلومات في اي وقت ومكان           
           </li>
         </ul> */}
       </Grid>
       <Grid item xs={12} sm={5} md={5} className="vcita-logo-col">
       <picture className="w-100">
          <source className="w-100" media="(max-width: 600px)" srcSet={VcitaMobile}/>
          <source media="(max-width: 1200px)" srcSet={Vcita}/>
          <img className="w-100 vcita-logo" src={Vcita} alt="booking logo"></img>
       </picture>
       </Grid>
     </Grid>
   </div>
  );
}

export default VcitaSvgCode;
