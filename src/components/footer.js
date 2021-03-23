import React, { Component } from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import Grid from '@material-ui/core/Grid';
import Helmet from "react-helmet";



const Footer = (props) => {

  return (
    <React.Fragment>
        <Helmet>
        <script src="https://apps.elfsight.com/p/platform.js" defer>
            </script>
                <script async src="https://www.widgetsquad.com/pixel/jey6kaqdrnfkq4brloyttj17i5zogryr"></script>
      </Helmet>
    <TableFooter className="footer">
        <Grid container className="pt-5 mt-5 justify-center">
            <Grid item sm={5} xs={6} md={2} className="orange-box-col">
                <div className="orange-box"></div>
            </Grid>
            <Grid item sm={6} xs={7} md={3} className="footer-col">
                <div className="footer-col-box">
                    <ul className="footer-contact-list">
                        <li className="footer-contact-item">
                            <a href="tel:+1.320.260.4416" className="phone-number">+1.320.260.4416</a>
                        </li>
                        <li className="footer-contact-item">
                            <a href="mailto:hello@redscheduling.com" className="email">
                            hello@redscheduling.com
                            </a>
                        </li>
                    </ul>
                </div>
            </Grid>
            <Grid item sm={10} xs={12} md={5} className="footer-h1-col">
                <h1 className="footer-h1">
                تغير للافضل
                </h1>
            </Grid>
            <Grid item sm={12} xs={12} md={12} className="footer-copy-right-col">
                <h5 className="footer-copy-right-h5">
                    PotooWeb 2021
                </h5>
            </Grid>
        </Grid>
        <div className="elfsight-app-38d41f1d-12a1-4f33-a280-71371f5263dd"></div>
    </TableFooter>
      </React.Fragment>
   
  );
};

export default(Footer);
