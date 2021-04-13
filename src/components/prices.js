import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Helmet} from 'react-helmet';

import ZZ from '../assests/logo-mobile.jpg';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const basic = "$40/month";
const premium = "$72/month";

function createData(name, basic, premium) {
  return { name,  basic, premium };
}

const rows = [
  createData('Vcita account', 'Included', 'Included'),
  createData('Logo', 'Included', 'Included'),
  createData('Website', 'Not included', 'Included'),
  createData('Busniess Card', 'Included', 'Included'),
  createData('Barcode', 'Included', 'Included'),
];


export default function PricesTable() {

  return (
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Prices</title>
      <meta name="description"  content="prices for patients account management"/>
    </Helmet>
    <TableContainer component={Paper} className="price-table-container">
      <Table className="prices-table my-xs-5" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">$40/month</TableCell>
            <TableCell align="right">$72/month</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.basic}</TableCell>
              <TableCell align="right">{row.premium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container space={0} className="pt-2 contract-container">
      <Grid item md={10} sx={10} xs={10} className="float-right">
        <p className="contract-p">اختر الاشتراك المناسب لك واملآ المعلومات بالضغط على الزر ادناه</p>
      </Grid>
      <Grid item md={10} sx={10} xs={10} className="float-right contract-btn-col pt-md-4">
        <a className="pdf-btn" href="https://www.redscheduling.com/contract.pdf">
           PDF
         </a>
      </Grid>
    </Grid>
    </>
  );
}