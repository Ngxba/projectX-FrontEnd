import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import {
  FormControl,
  Select,
  MenuItem,
  Grid,
  Divider,
} from "@material-ui/core";
import CustomListItems from "./list-items";
import CustomTypography from "../../components/Typography/typography";
import CardContainer from "../../container/card_container/card_container";
import Breadcrumb from "../../components/Breadcrumbs/breadcrumbs";
import productsListStyle from "./products.style";

const fakeData = [
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
  {
    name: "Product Title",
    price: 100,
    numberSold: 0,
    imgSrc:
      "https://stockx-360.imgix.net/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946",
  },
];

const Products = () => {
  const classes = productsListStyle();
  const [filter, setFilter] = React.useState(10);
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  // const [smallopen, setSmallOpen] = React.useState(true);

  // const handleSmallClick = () => {
  //   setSmallOpen(!smallopen);
  // };

  // const [data, setData] = React.useState([]);
  // const handleLoadData = async () => {
  //   try {
  //     const respond = await getAllProduct();
  //     let brandList = respond.map((item) => item.brand);
  //     brandList = [...new Set(brandList)];
  //     setData(respond);
  //     console.log(brandList);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(async () => {
  //   await handleLoadData();
  //   console.log(data);
  // }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: "90px" }}>
      <Grid className={classes.root} container xs={12}>
        <CustomTypography component="h2" txtStyle="text--heading">
          Supreme
        </CustomTypography>
        <CustomTypography
          component="p"
          txtType="text--light"
          style={{ maxWidth: "450px" }}
        >
          Buy and sell tees, hoodies, accessories and more from streetwear
          juggernaught Supreme on StockX here!
        </CustomTypography>
      </Grid>
      <Grid className={classes.gridContainer} container spacing={2}>
        <Grid className={classes.leftSide} item xs={3}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Brands
              </ListSubheader>
            }
          >
            <CustomListItems></CustomListItems>
            {/* <ListItem button onClick={handleClick}>
              <ListItemText primary="Addidas" />
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Nike" />
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Air Jordan" />
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Other Brands" />
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Yeezy" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="ASICS" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Converse" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Diadora" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Crocs" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Li-Ning" />
                </ListItem>
                <List
                  button
                  className={classes.nested}
                  onClick={handleSmallClick}
                >
                  <CustomTypography
                    className={classes.show_more}
                    txtComponent="p"
                  >
                    Show More
                  </CustomTypography>
                  <Collapse in={!smallopen} timeout="auto" unmountOnExit>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <Checkbox edge="start" disableRipple />
                      </ListItemIcon>
                      <ListItemText primary="New Balance" />
                    </ListItem>
                  </Collapse>
                </List>
              </List>
            </Collapse> */}
          </List>
          <Divider />
          <List></List>
        </Grid>
        <Grid className={classes.rightSide} item xs={9}>
          <Grid item xs={12} className={classes.sort}>
            <Grid item xs={6}>
              <Breadcrumb data={["home", "streetwear", "jordan"]} />
            </Grid>
            <Grid item xs={6} className={classes.formControl}>
              <FormControl>
                <div className={classes.package}>
                  <div className={classes.textRow}>
                    <span className={classes.textTitle}>
                      <strong>Sort by:&#160;</strong>
                    </span>
                    <Select
                      value={filter}
                      onChange={handleChange}
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={1}>Featured</MenuItem>
                      <MenuItem value={2}>Newest</MenuItem>
                      <MenuItem value={3}>Most Popular</MenuItem>
                    </Select>
                  </div>
                </div>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CardContainer data={fakeData} showCategory={false} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
