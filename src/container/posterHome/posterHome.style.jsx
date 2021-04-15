import { makeStyles } from "@material-ui/core/styles";

const posterHomeStyle = makeStyles({
  root: {
    backgroundImage:
      "url('https://stockx-sneaker-analysis.s3.amazonaws.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-15-at-4.59.18-PM.png')",
    padding: "280px 15% 280px 15%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  block: {
    background: "#000",
    padding: "22px 22px 50px",
    position: "relative",
    // maxWidth: "784px",
    width: "calc(100% - 10px)",
  },
});

export default posterHomeStyle;
