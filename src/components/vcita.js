import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Helmet} from "react-helmet";

import VcitaPic from "../assests/vCita-new-clients.gif"
import AddClientsPic from "../assests/add-clients.png"
import NewClientsPic from "../assests/new-client.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>vCita</title>
        <meta name="description" content="vCita accounts to manage patients information and online appointments"></meta>
      </Helmet>
      <Grid container spacing={0} className="pt-md-5 py-xs-5 mt-xs-3 mt-md-5 vCita-Page-container">
        <Grid item xs={12} sm={12} md={7} className="vCita-new-clients-h1-col text-right pr-md-5 pb-md-5">
          <h1 className="vCita-new-clients-h1 text-right pr-xs-2">
              خطوات انشاء حساب للمراجعين
          </h1>
        </Grid>
        <Grid item xs={11} sm={11} md={7} className="vCita-new-clients-steps-img-col pr-md-5 py-xs-1">
          <img className="vCita-new-clients-steps-img w-100 px-xs-2" src={VcitaPic}></img>
        </Grid>
        <Grid item xs={11} sm={11} md={7} className="vCita-new-clients-steps-list-col pr-md-5">
          <ul className="vCita-new-clients-steps-list text-right">
                <li className="item">
                    New Client ثم أضغط Clients الخطوة الاولى: أضغط على زر 
                </li>
                <li className="item">
                    <img className="add-client-pic w-100" src={AddClientsPic} alt="add clients to vCita"/>
                </li>
                <li className="item">
                أملأ معلومات المراجع
                </li>
                <li className="item">
                    لحفظ معلومات المراجعين Save أضغط 
                </li>
                <li className="item">
                    تم حفظ الحساب الجديد
                </li>
                <li className="item">
                    <img className="add-client-pic w-100" src={NewClientsPic} alt="New clients"/>
                </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
