import React, { Component } from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import Grid from '@material-ui/core/Grid';




const Footer = (props) => {

  return (
    <React.Fragment>
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
    </TableFooter>
      </React.Fragment>
   
  );
};

export default(Footer);
