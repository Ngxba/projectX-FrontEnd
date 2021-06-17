import { makeStyles } from "@material-ui/core/styles";

const newStyle = makeStyles(() => ({
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
    height: "270px",
    width: "100%",
    paddingLeft: "3rem",
  },
  container: {
    maxWidth: "1295px",
    margin: "0 auto",
    width: "94%",
    position: "relative",
  },
  headline: {
    marginTop: "90px",
    zIndex: 1000,
  },
}));

export default newStyle;
