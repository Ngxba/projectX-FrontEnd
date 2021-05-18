import { makeStyles } from "@material-ui/core/styles";

const brandStyle = makeStyles(() => ({
  root: {
    // height: "80vh",
  },
  rootPart: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10% 30px 150px 30px",
    flexDirection: "column",
  },
  bgGray: { backgroundColor: "#fafafa" },
  alarm: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    background: "rgb(239, 239, 239)",
    borderRadius: "30px",
  },
  buttonChoose: {
    padding: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0",
  },
  textCenter: {
    textAlign: "center",
  },
  bottomNav: {
    padding: "30px",
    borderTop: "2px solid #999999",
    textAlign: "end",
  },
}));

export default brandStyle;
