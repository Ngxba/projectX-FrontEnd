import { makeStyles } from "@material-ui/core/styles";

const customShopCategories = makeStyles({
  shop: {
    background: "#000",
    padding: "100px 0 120px",
  },
  container: {
    maxWidth: "1295px",
    margin: "0 auto",
    width: "94%",
    position: "relative",
  },
  title: {
    zIndex: "1",
    textTransform: "uppercase",
    position: "absolute",
    top: "-120px",
    left: "0",
    color: "#000",
    webkitTextStrokeWidth: "1px",
    webkitTextStrokeColor: "#fff",
    fontFamily: "Ringside Wide Med,sans-serif",
    fontSize: "4.5rem",
    letterSpacing: "-.164rem",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    zIndex: "2",
  },
  item: {
    position: "relative",
    width: "calc(50% - 5px)",
    margin: " 0 10px 10px 0",
  },
  image: {
    width: "100%",
    height: "0",
    paddingTop: "121.57%",
    position: "relative",
  },
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    objectFit: "cover",
    objectPosition: "center center",
  },
  label: {
    transition: ".3s",
    background: "#fff",
    color: "#25292b",
    fontFamily: "Ringside Wide Med",
    fontSize: "1.125rem",
    padding: "2px 6px 4px",
    position: "absolute",
    bottom: "20px",
    left: "20px",
  },
});
export default customShopCategories;
