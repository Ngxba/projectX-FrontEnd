import React from 'react';
import CustomTypography from '../../../components/Typography/typography';
import introStyle from './intro.style';

function Intro()
{
  const classes = introStyle();
  return (
    <React.Fragment key="introHome">
      <div className={classes.center} />
    </React.Fragment>
  );
}

export default Intro;
