import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomTypography from "../../components/Typography/typography";
import customShopCategories from "./shop.style";

function ShopCategories()
{
  const classes = customShopCategories();
  return (
    <section className={classes.shop}>
      <div className={classes.container}>
        <div className={classes.title}>
          <CustomTypography
            txtComponent="p"
            color="white"
            fontSize="60px !important"
          >
            SHOP
          </CustomTypography>
          <CustomTypography
            txtComponent="p"
            color="white"
            fontSize="60px !important"
            style={{ opacity: ".6" }}
          >
            SHOP
          </CustomTypography>
          <CustomTypography
            txtComponent="p"
            color="white"
            fontSize="60px !important"
            style={{ opacity: ".4" }}
          >
            SHOP
          </CustomTypography>
        </div>
        <div className={classes.wrapper}>
          <Grid container spacing={1} justify="center">
            <Grid item md={2} xs={6}>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="bluestone"
                  src="https://stockx.com/about/wp-content/uploads/2020/12/blue-shoe.png"
                />
              </div>
              <CustomTypography
                className={classes.item}
                href="https://stockx.com/sneakers"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--bold"
              >
                <h4 className={classes.label}>Sneakers</h4>
              </CustomTypography>
            </Grid>
            <Grid item md={2} xs={6}>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="streetwear"
                  src="https://stockx.com/about/wp-content/uploads/2020/12/xxxx-Stock-X-12-12-191831-990x1200.jpg"
                />
              </div>
              <CustomTypography
                className={classes.item}
                href="https://stockx.com/streetwear"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--bold"
              >
                <h4 className={classes.label}>Streetwear</h4>
              </CustomTypography>
            </Grid>
            <Grid item md={2} xs={6}>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="Electronics"
                  src="https://stockx.com/about/wp-content/uploads/2020/12/HOLIDAY2020_0783-990x1200.jpg"
                />
              </div>
              <CustomTypography
                className={classes.item}
                href="https://stockx.com/electronics"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--bold"
              >
                <h4 className={classes.label}>Electronics</h4>
              </CustomTypography>
            </Grid>
            <Grid item md={2} xs={6}>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="Collectibles"
                  src="https://stockx.com/about/wp-content/uploads/2020/12/KAWS-CLEAN-SLATE-643A5129-990x1200.jpg"
                />
              </div>
              <CustomTypography
                className={classes.item}
                href="https://stockx.com/Collectibles"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--bold"
              >
                <h4 className={classes.label}>Collectibles</h4>
              </CustomTypography>
            </Grid>
            <Grid item md={2} xs={6}>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="Handbags"
                  src="https://stockx.com/about/wp-content/uploads/2020/12/lv-priSm-volgA-BAG2212-990x1200.jpg"
                />
              </div>
              <CustomTypography
                className={classes.item}
                href="https://stockx.com/handbags"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--bold"
              >
                <h4 className={classes.label}>Handbags</h4>
              </CustomTypography>
            </Grid>
            <Grid item md={2} xs={6}>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="Watches"
                  src="https://stockx.com/about/wp-content/uploads/2020/12/ROLEX_2020_03_10_rolex_monthly_watches0277-1-990x1200.jpg"
                />
              </div>
              <CustomTypography
                className={classes.item}
                href="https://stockx.com/watches"
                txtComponent="a"
                txtStyle="text--link"
                txtType="text--bold"
              >
                <h4 className={classes.label}>Watches</h4>
              </CustomTypography>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default ShopCategories;
