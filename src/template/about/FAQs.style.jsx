import { makeStyles } from "@material-ui/core/styles";

const customFAQs = makeStyles({
  FAQs: {
    background: "#000",
    padding: "60px 0 40px",
    color: "#fff",
    fontSize: "28px",
    marginTop: "100px",
  },
  container: {
    maxWidth: "1295px",
    margin: "0 auto",
    width: "94%",
    position: "relative",
  },
  headline: {
    textAlign: "center",
    marginBottom: "40px",
    lineHeight: "1.125",
    color: "#fff",
  },
  // wrapper: {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  // },
  question: {
    // margin: "0 25px 25px 0",
    // marginTop: "25px",
    padding: "30px",
    // width: "calc(50% - 12.5px)",
    minHeight: "150px",
    position: "relative",
    transition: ".3s",
    border: "1px solid #fff",
    fontSize: "1.125rem",
    lineHeight: "1.555",
    // width: '31%',
  },
  icon: {
    bottom: '25px',
    right: '28px',
    transform: 'none',
    content: "\f178",
    position: 'absolute',
    color: '#08a05c',
  },
});

export default customFAQs;
