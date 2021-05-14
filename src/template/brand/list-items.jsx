import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import PropTypes, { string } from "prop-types";
import CustomTypography from "../../components/Typography/typography";
import brandStyle from "./brand.style";
import { makeKey } from "../../utils/supportFunction";

const BigPrimary = ["Adidas", "Nike", "Air Jordan"];

const SmallPrimary = ["Yeezy", "Air Max", "1"];

const CustomListItems = (props) => {
  const { bigPrimary, smallPrimary, selected, queryType, updateQuery, ...rest } = props;

  const classes = brandStyle(rest);

  const [open, setOpen] = React.useState(false);

  const [smallopen, setSmallOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    setSmallOpen(false);
  };

  const handleSmallClick = () => {
    setSmallOpen(!smallopen);
  };

  const checkSelected = (values) => {
    if (Array.isArray(selected)) {
      if (queryType === "tags") {
        return values.every((i) => selected.includes(i));
      }
      return selected.some((i) => values.includes(i));
    }
    return selected === values;
  };

  const onCheckBoxChange = (values) => {
    if (Array.isArray(selected)) {
      if (queryType === "tags") {
        if (values.every((i) => selected.includes(i))) {
          updateQuery(queryType, []);
        } else {
          updateQuery(queryType, [...values]);
        }
      } else if (queryType !== "tags" && selected.includes(values)) {
        const newSelected = [...selected.filter((i) => !values.includes(i))];
        updateQuery(queryType, newSelected);
      } else {
        updateQuery(queryType, [values, ...selected]);
      }
    } else {
      updateQuery(queryType, selected === values ? undefined : values);
    }
  };

  return (
    <React.Fragment key="list-item">
      <ListItem button onClick={handleClick} disableGutters={false}>
        <ListItemText primary={bigPrimary} />
        {!open ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" dense disablePadding>
          {smallPrimary.slice(0, 4).map((item) => (
            <FormControlLabel
              key={makeKey(10)}
              style={{ display: "contents" }}
              control={(
                <ListItem button className={classes.nested}>
                  <Checkbox
                    edge="start"
                    size="small"
                    checked={checkSelected(queryType === "tags" ? [bigPrimary, item.value] : item.value)}
                    onChange={() => onCheckBoxChange(queryType === "tags" ? [bigPrimary, item.value] : item.value)}
                    name="tags"
                    color="primary"
                    disableRipple
                    value={item.value}
                  />
                  <ListItemText primary={item.name} />
                </ListItem>
              )}
            />
          ))}
          <List className={classes.nested} dense disablePadding>
            {(smallPrimary.slice(5).length > 0 && !smallopen) && (
              <CustomTypography className={classes.show_more} txtComponent="p" onClick={handleSmallClick}>
                Show More
              </CustomTypography>
            )}
            <Collapse in={smallopen} timeout="auto" unmountOnExit>
              {smallPrimary.slice(4).map((item) => (
                <FormControlLabel
                  key={makeKey(10)}
                  style={{ display: "contents" }}
                  control={(
                    <ListItem button className={classes.nested}>
                      <Checkbox
                        edge="start"
                        size="small"
                        checked={checkSelected(queryType === "tags" ? [bigPrimary, item.value] : item.value)}
                        onChange={() => onCheckBoxChange(queryType === "tags" ? [bigPrimary, item.value] : item.value)}
                        name="tags"
                        color="primary"
                        disableRipple
                        value={item.value}
                      />
                      <ListItemText primary={item.name} />
                    </ListItem>
                  )}
                />
              ))}
            </Collapse>
          </List>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

CustomListItems.propTypes = {
  smallPrimary: PropTypes.arrayOf(PropTypes.object),
  bigPrimary: PropTypes.string,
  selected: PropTypes.oneOfType([
    PropTypes.arrayOf(string),
    PropTypes.string,
  ]),
  queryType: PropTypes.string,
  updateQuery: PropTypes.func,
  className: PropTypes.string,
};

CustomListItems.defaultProps = {
  smallPrimary: SmallPrimary[0],
  bigPrimary: BigPrimary[0],
  selected: [],
  queryType: "",
  updateQuery: () => { },
  className: "",
};

export default React.memo(CustomListItems);
