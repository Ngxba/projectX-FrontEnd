import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes, { string } from "prop-types";
import CustomTypography from "../../components/Typography/typography";
import productsListStyle from "./products.style";
import { makeKey } from "../../utils/supportFunction";

const BigPrimary = ["Adidas", "Nike", "Air Jordan"];

const SmallPrimary = ["Yeezy", "Air Max", "1"];

const CustomListItems = (props) => {
  const { bigPrimary, smallPrimary, ...rest } = props;

  const classes = productsListStyle(rest);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [smallopen, setSmallOpen] = React.useState(true);

  const handleSmallClick = () => {
    setSmallOpen(!smallopen);
  };

  return (
    <React.Fragment key="list-item">
      <ListItem button onClick={handleClick}>
        <ListItemText primary={bigPrimary} />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {smallPrimary.slice(0, 4).map((item) => (
            <ListItem button key={makeKey(10)} className={classes.nested}>
              <ListItemIcon>
                <Checkbox edge="start" disableRipple />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
          <List className={classes.nested}>
            {smallPrimary.slice(5).length > 0 && (
              <CustomTypography className={classes.show_more} txtComponent="p" onClick={handleSmallClick}>
                Show More
              </CustomTypography>
            )}
            <Collapse in={!smallopen} timeout="auto" unmountOnExit>
              {smallPrimary.slice(4).map((item) => (
                <ListItem button key={makeKey(10)} className={classes.nested}>
                  <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </Collapse>
          </List>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

CustomListItems.propTypes = {
  smallPrimary: PropTypes.arrayOf(string),
  bigPrimary: PropTypes.string,
  className: PropTypes.string,
};

CustomListItems.defaultProps = {
  smallPrimary: SmallPrimary[0],
  bigPrimary: BigPrimary[0],
  className: "",
};

export default CustomListItems;
