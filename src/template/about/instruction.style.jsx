import { makeStyles } from "@material-ui/core/styles";

const customInstruction = makeStyles({
  instruction: {
    padding: "60px 0",
    display: "block",
    marginTop: "300px",
  },
  container: {
    maxWidth: "1295px",
    margin: "0 auto",
    width: "94%",
    position: "relative",
  },
  headline: {
    textAlign: "center",
    margin: "0 0 50px",
    fontSize: "30px",
  },
  image: {
    textAlign: "center",
    maxWidth: "550px",
    margin: "0 auto",
    position: "relative",
  },
  button: {
    width: "100%",
    height: "auto",
    display: "block",
    maxWidth: "100%",
  },
  clutch: {
    position: "absolute",
    zIndex: "5",
    bottom: "-50px",
    right: "50%",
    transform: "translateX(50%)",
    width: "75%",
    height: "auto",
    display: "block",
  },
  block: {
    margin: "35px auto",
    marginTop: "150px",
    textAlign: "center",
  },
  headline2: {
    fontSize: "1.125rem",
    letterSpacing: "-.042rem",
    lineHeight: "1.333",
    fontFamily: "Ringside Wide Med,sans-serif",
    textAlign: "center",
  },
  description: {
    margin: "13px 0 0",
    lineHeight: "1.625",
    textAlign: "center",
  },
  link: {
    margin: "10px 0 0",
    display: "block",
    fontFamily: "Ringside Wide Med,sans-serif",
    textAlign: "center",
  },
  plus: {
    display: "inline-block",
    marginLeft: "10px",
  },
});

export default customInstruction;
