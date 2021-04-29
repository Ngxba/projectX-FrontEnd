import { makeStyles } from '@material-ui/core/styles';

const profileContainerStyle = makeStyles({
  root: {
    width: "100%",
    marginInline: "auto",
    maxWidth: "72rem",
    paddingInlineStart: "2rem",
    paddingInlineEnd: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },

  heading_container: {
    display: "flex",
    alignItems: "flex-end",
    borderStyle: "solid",
    borderBottomColor: "#cfcfcf",
    borderWidth: "0px 0px 1px",
    paddingBottom: "0.75rem",
    marginBottom: "1.25rem",
  },

  heading: {
    fontSize: "1.5rem",
    lineHeight: "32px",
    letterSpacing: "-0.6px",
    width: "100%",
  },

  title: {
    lineHeight: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.25rem",
    fontSize: 15,

  },
});
export default profileContainerStyle;
