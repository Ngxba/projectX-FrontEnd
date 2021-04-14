import { makeStyles } from "@material-ui/core/styles";

const customStepMedia = makeStyles({
  animation: {
    height: "auto",
    display: "block",
    animation: "spinner 25s linear 0ms infinite normal",
    width: "329px",
  },
  custom: {
    objectFit: "contain",
    width: "100%!important",
    height: "100%!important",
    display: "block",
    position: "absolute",
    top: "0",
    left: "0",
    objectPosition: "center center",
  },
  section: {
    position: "absolute",
    marginTop: "25px",
    // top: "0",
    height: "250px",
    width: "329px",
    right: "50%",
    transform: "translateX(50%)",
    WebkitTransform: "translateX(50%)",
  },
  placeholder: {
    position: "absolute",
    bottom: "50%",
    right: "50%",
    transform: "translate(50%,50%)",
    width: "100%",
    webkitTransform: "translate(50%,50%)",
  },
  imghidden: {
    height: "0",
    width: "calc(100% - 40px)",
    paddingTop: "calc(100% - 40px)",
    opacity: "1",
    transition: ".3s",
  },
  contain: {
    objectFit: "contain",
    width: "100%!important",
    height: "70%!important",
    display: "block",
    position: "absolute",
    top: "50px",
    left: "0",
    objectPosition: "center center",
  },
});

export default customStepMedia;
