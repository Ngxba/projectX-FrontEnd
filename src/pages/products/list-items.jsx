import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from 'prop-types';
import CustomTypography from "../../components/Typography/typography";
import productsListStyle from "./products.style";

const BigPrimary = [
  'Adidas',
  'Nike',
  'Air Jordan',
];

const SmallPrimary = [
  'Yeezy',
  'Air Max',
  '1',
];

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
          <ListItem button className={classes.nested}>
            <ListItemText primary={smallPrimary} />
          </ListItem>
          <List button className={classes.nested} onClick={handleSmallClick}>
            <CustomTypography className={classes.show_more} txtComponent="p">
              Show More
            </CustomTypography>
            <Collapse in={!smallopen} timeout="auto" unmountOnExit>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary={smallPrimary} />
              </ListItem>
            </Collapse>
          </List>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

CustomListItems.propTypes = {
  children: PropTypes.node.isRequired,
  smallPrimary: PropTypes.oneOf(SmallPrimary),
  bigPrimary: PropTypes.oneOf(BigPrimary),
  className: PropTypes.string,
};

CustomListItems.defaultProps = {
  smallPrimary: SmallPrimary[0],
  bigPrimary: BigPrimary[0],
  className: '',
};

export default CustomListItems;
