import { useTheme } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core';
import CustomTypography from '../../../components/Typography/typography';
import productHeaderStyle from './product_header.style';

const chunkArray = (myArray, chunkSize) =>
{
  const arrayLength = myArray.length;
  const tempArray = [];

  for (let index = 0; index < arrayLength; index += chunkSize)
  {
    const myChunk = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};

const sizeChart = ['3.5', '2.5', '35.5', '22.5', '5', '4', '3', '36', '23', '5.5', '4.5', '3.5',
  '36.5', '23.5', '6', '5', '4', '37.5', '23.5', '6.5', '5.5', '4.5', '38', '24', '7', '6', '5.5',
  '38.5', '24', '7.5', '6.5', '6', '39', '24.5', '8', '7', '6', '40', '25', '8.5', '7.5', '6.5',
  '40.5', '25.5', '9', '8', '7', '41', '26', '9.5', '8.5', '7.5', '42', '26.5', '10', '9', '8',
  '42.5', '27', '10.5', '9.5', '8.5', '43', '27.5', '11', '10', '9', '44', '28', '11.5', '10.5',
  '9.5', '44.5', '28.5', '12', '11', '10', '45', '29', '12.5', '11.5', '10.5', '45.5', '29.5',
  '13', '12', '11', '46', '30', '13.5', '12.5', '11.5', '47', '30.5', '14', '13', '12', '47.5',
  '31', '14.5', '13.5', '12.5', '48', '31.5', '15', '14', '13', '48.5', '32', '15.5', '15', '14',
  '49.5', '33', '16', '16', '15', '50.5', '34', '16.5', '17', '16', '51.5', '35', '17', '18', '17',
  '52.5', '36', '17.5'];

const StyledTableCell = withStyles(() => ({
  head: {
    fontSize: 13,
    padding: '5px 0px',
    alignItems: 'stretch',
    textAlign: 'center',
    background: 'white',
    height: '36px',
    textTransform: 'uppercase',
    fontWeight: '700',
    borderBottom: 'none',
  },
  body: {
    fontSize: 13,
    width: '20%',
    letterSpacing: '1.2px',
    padding: '7px 0px 8px',
    borderBottom: 'none',
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    backgroundColor: '#FFFFFF',

    '&:nth-of-type(odd)': {
      backgroundColor: '#FAFAFA',
    },
  },
}))(TableRow);

const SizeChart = ({
  backButtonOnClick,
  currentSize,
}) =>
{
  // Divide to subarray
  const rows = chunkArray(sizeChart, 5);

  const classes = productHeaderStyle();
  const theme = useTheme();

  return (
    <>
      <div className={classes.size_chart_header}>

        {/* Back button */}
        <CustomTypography
          onClick={backButtonOnClick}
          txtType="text--bold"
          style={
            {
              fontSize: '14px',
              paddingLeft: '23px',
              cursor: 'pointer',
              maxHeight: '20px',
              paddingRight: '19px',
              color: theme.palette.primary.main,
            }
          }
        >
          &lt; Back
        </CustomTypography>

        {/* Header */}
        <CustomTypography
          txtType="text--bold"
          style={
            {
              textAlign: 'center',
              height: '30px',
              paddingRight: '130px',
            }
          }
        >
          Size Chart
        </CustomTypography>

      </div>

      {/* Size chart table */}
      <TableContainer style={{
        height: '346px',
        width: '343px',
      }}
      >
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">US</StyledTableCell>
              <StyledTableCell align="center">UK</StyledTableCell>
              <StyledTableCell align="center">EU</StyledTableCell>
              <StyledTableCell align="center">CM</StyledTableCell>
              <StyledTableCell align="center">Women</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) =>
            {
              const [us, uk, eu, cm, w] = row;
              const highlighted = currentSize === us;

              return (
                <StyledTableRow
                  key={eu}
                  style={{ background: highlighted ? '#eef7eb' : null }}
                >
                  <StyledTableCell align="center">{us}</StyledTableCell>
                  <StyledTableCell align="center">{uk}</StyledTableCell>
                  <StyledTableCell align="center">{eu}</StyledTableCell>
                  <StyledTableCell align="center">{cm}</StyledTableCell>
                  <StyledTableCell align="center">{w}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

SizeChart.propTypes = {
  backButtonOnClick: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default SizeChart;
