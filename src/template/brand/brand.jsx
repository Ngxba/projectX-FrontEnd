/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import {
  FormControl, Grid, MenuItem, Select,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
import CustomTypography from '../../components/Typography/typography';
import CardContainer from '../../container/card_container/card_container';
import Breadcrumb from '../../components/Breadcrumbs/breadcrumbs';
import brandStyle from './brand.style';
import { FetchProducts } from '../../redux/actions/productActions';

const Brand = ({ match }) =>
{
  const { params } = match;
  const textRoutes = Object.values(params);

  let title = '';

  const linkRoutes = textRoutes.reduce((results, text, index) =>
  {
    if (text !== undefined)
    {
      // Generate brand page title
      title += `${text} `;

      // Generate brand page breadcrumbs data
      let href = '/brand';
      for (let i = 0; i <= index; i += 1)
      {
        href += `/${textRoutes[i]}`;
      }

      results.push({
        href,
        text,
      });
    }
    return results;
  }, []);

  const classes = brandStyle();
  const [age, setAge] = React.useState(10);
  const [titleBrand, setTitleBrand] = React.useState('');

  const productsState = useSelector((state) => state.productsState);

  const dispatch = useDispatch();

  const handleChange = (event) =>
  {
    setAge(event.target.value);
  };

  useEffect(() =>
  {
    dispatch(FetchProducts(0, 40, params));
    setTitleBrand(title);
  }, [params]);

  return (
    <Container maxWidth="md">
      <Grid className={classes.root} container>
        <CustomTypography
          component="h2"
          txtStyle="text--heading"
          style={{ textTransform: 'capitalize' }}
        >
          {titleBrand}
        </CustomTypography>
        <CustomTypography
          component="p"
          txtType="text--light"
          style={{ maxWidth: '450px' }}
        >
          {`Buy and sell tees, hoodies, accessories and more from streetwear
          juggernaught ${titleBrand} on ProjectX here!`}
        </CustomTypography>
      </Grid>
      <Grid className={classes.gridContainer} container spacing={2}>
        <Grid className={classes.leftSide} item xs={2}>
          <div>Other Brands</div>
        </Grid>
        <Grid className={classes.rightSide} item xs={10}>
          <Grid item xs={12} className={classes.sort}>
            <Grid item xs={6}>
              <Breadcrumb data={linkRoutes} />
            </Grid>
            <Grid item xs={6} className={classes.formControl}>
              <FormControl>
                <div className={classes.package}>
                  <div className={classes.textRow}>
                    <span className={classes.textTitle}>
                      <strong>Sort by:&#160;</strong>
                    </span>
                    <Select
                      value={age}
                      onChange={handleChange}
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                </div>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CardContainer
              data={productsState.productsData}
              showCategory={false}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Brand;
