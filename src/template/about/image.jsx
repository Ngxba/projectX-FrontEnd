import React from "react";
import customStepMedia from "./image.style";

function StepMedia()
{
  const classes = customStepMedia();
  return (
    <div className={classes.section}>
      <div className={classes.animation}>
        <img
          alt="how it works"
          src="https://stockx.com/about/wp-content/uploads/2020/11/how-it-works-stamp.svg"
          className={classes.custom}
        />
      </div>
      <div className={classes.placehoder}>
        <div className={classes.imghidden}>
          <img
            className={classes.contain}
            alt="shoe"
            src="https://stockx.com/about/wp-content/uploads/2020/12/Nike-React-Element-55-Kendrick-Lamar-removebg-preview.png"
          />
        </div>
        {/* <div className={classes.imghidden}>
          <img
            className={classes.contain}
            alt="wallet"
            src="https://stockx.com/about/wp-content/uploads/2020/12/wallet-800x800.png"
          />
        </div>
        <div className={classes.imghidden}>
          <img
            className={classes.contain}
            alt="plush"
            src="https://stockx.com/about/wp-content/uploads/2020/12/kawspinkplush-800x800.png"
          />
        </div>
        <div className={classes.imghidden}>
          <img
            className={classes.contain}
            alt="watch"
            src="https://stockx.com/about/wp-content/uploads/2020/12/watch-800x800.png"
          />
        </div>
        <div className={classes.imghidden}>
          <img
            className={classes.contain}
            alt="sweatshirt"
            src="https://stockx.com/about/wp-content/uploads/2020/12/Supreme-Bandana-Box-Logo-Hooded-Sweatshirt-Heather-Greyg-800x800.png"
          />
        </div> */}
      </div>
    </div>
  );
}

export default StepMedia;
