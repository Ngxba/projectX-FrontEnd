import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { sort } from 'fast-sort';
import { headCells, rows } from './fake_data';
import CustomTypography from '../../../components/Typography/typography';

function stableSort(array, order, orderBy)
{
  return order === 'desc'
    ? sort(array)
      .desc((el) => el[orderBy])
    : sort(array)
      .asc((el) => el[orderBy]);
}

function EnhancedTableHead(props)
{
  const {
    classes,
    order,
    orderBy,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) =>
  {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <CustomTypography txtType="text--bold" txtStyle="text--category">
                {headCell.label}
              </CustomTypography>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = () =>
{
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={classes.root}
    >
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        History
      </Typography>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function CustomTable({ data })
{
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(13);

  const preprocessedData = data.map((el) => ({
    ...el,
    purchaseDate: el.purchaseDate !== null ? new Date(el.purchaseDate).toDateString() : null,
  }));

  const handleRequestSort = (event, property) =>
  {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) =>
  {
    if (event.target.checked)
    {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) =>
  {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) =>
  {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(preprocessedData, order, orderBy)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.productId}
                  >
                    {
                      // Check if the order data is default (all values are null)
                      (!preprocessedData[0].productName)
                        ? (
                          <>
                            <TableCell component="th" id={row.id} scope="row" padding="none">
                              <CustomTypography txtStyle="text--secondary" fontSize={15}>
                                No data
                              </CustomTypography>
                            </TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                          </>

                        )
                        : (
                          <>
                            <TableCell component="th" id={row.id} scope="row" padding="none">
                              <CustomTypography
                                href={`/product/${row.urlKey}`}
                                style={{ textDecoration: 'none' }}
                                onClick={() =>
                                {
                                  // eslint-disable-next-line no-undef
                                  window.location.href = `/product/${row.urlKey}`;
                                }}
                              >
                                {row.productName}
                              </CustomTypography>
                            </TableCell>

                            {/* status */}
                            <TableCell
                              component="th"
                              id={row.id}
                              scope="row"
                              padding="none"
                            >
                              <CustomTypography txtType="text--light">
                                {row.status}
                              </CustomTypography>
                            </TableCell>

                            {/* purchase date */}
                            <TableCell align="right">
                              <CustomTypography txtType="text--light">
                                {row.purchaseDate}
                              </CustomTypography>
                            </TableCell>

                            {/* price */}
                            <TableCell align="right">
                              <CustomTypography txtType="text--light">
                                {row.price}
                              </CustomTypography>
                            </TableCell>
                          </>
                        )
                    }
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[13, 26, 39]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    {
      price: PropTypes.number,
      productId: PropTypes.string,
      productName: PropTypes.string,
      purchaseDate: PropTypes.string,
      status: PropTypes.string,
      urlKey: PropTypes.string,
    },
  )).isRequired,

};
