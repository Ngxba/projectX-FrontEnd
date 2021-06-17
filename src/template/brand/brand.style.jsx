import { makeStyles } from "@material-ui/core/styles";

const brandStyle = makeStyles(() => ({
  root: {
    WebkitTapHighlightColor: "transparent",
    textSizeAdjust: "100%",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizelegibility",
    "-chakraUiColorMode": "light",
    fontFeatureSettings: '"kern"',
    fontFamily: "RingsideRegular-Book, sans-serif",
    color: "rgb(26, 32, 44)",
    lineHeight: "1.5",
    fontSize: "100%",
    borderWidth: "0px",
    borderStyle: "solid",
    boxSizing: "border-box",
    borderColor: "rgb(226, 232, 240)",
    overflowWrap: "break-word",
    background: "#E7E8E8",
    minHeight: "initial",
    display: "flex",
    alignItems: "flex-start",
    WebkitBoxPack: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage:
      "url(//stockx-assets.imgix.net/Core/browse-header-streetwear.jpg?auto=compress,format)",
    height: "270px",
    width: "100%",
    paddingLeft: "3rem",
  },

  selectEmpty: {
    all: "none",
    "&::before, &::after": {
      borderBottom: "unset !important",
      backgroundColor: "none !important",
    },
    height: "48px",
  },

  formControl: {
    display: "contents",
    width: "100%",
  },

  package: {
    marginRight: "1.25rem",
    border: "1px solid rgb(231, 232, 232)",
    height: "48px",
    padding: "1rem",
    display: "flex",
    position: "relative",
    fontSize: "0.875rem",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "0px",
    marginBottom: "0px",
    width: "100%",
    cursor: "pointer",
  },

  textRow: {
    marginLeft: "0.25rem",
    flexDirection: "row",
    marginRight: "0.25rem",
  },

  textTitle: {
    margin: "0px",
  },

  gridContainer: {
    marginTop: "2.5rem",
  },

  rightSide: {
    alignItems: "center",
    marginBottom: "1.5rem",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sort: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  show_more: {
    textAlign: "center",
    color: "#08a05c",
    cursor: "pointer",
    fontSize: "13px",
  },

  size: {
    fontWeight: "600",
    fontSize: "12px",
    paddingTop: "2px",
    height: "32px",
    width: "32px",
    textAlign: "center",
    lineHeight: "30px",
    backgroundColor: "#f5f5f5",
    marginBottom: "10px",
  },

  sizeNumber: {
    display: "inline-block",
    maxWidth: "100%",
    marginBottom: "5px",
    fontWeight: "700",
  },
}));

export default brandStyle;
