import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

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
  createData('Vcita', 'Yes', 'Yes'),
  createData('Logo', 'X', 'Yes'),
  createData('Website', 'X', 'Yes'),
  createData('Busniess Card', 'X', 'Yes'),
  createData('Barcode', 'X', 'Yes'),
];

export default function PricesTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="price-table-container">
      <Table className={clsx(classes.table, "prices-table my-xs-5")} aria-label="simple table">
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
  );
}