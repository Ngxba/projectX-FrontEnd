import { makeStyles } from "@material-ui/core/styles";

const customAboutGrid = makeStyles({
  container: {
    background: '#fff',
    paddingTop: '70px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  grid: {
    width: 'calc(50% - 25px)',
    // margin: '0 50px 60px 0',
    textAlign: 'center',
    marginBottom: "40px",
  },
  image: {
    width: '90px',
    height: 'auto',
    margin: '0 auto 30px',
    display: 'block',
  },
  learnmore: {
    display: 'block',
    marginTop: '20px',
    letterSpacing: '-.047rem',
    fontSize: '17px',
    color: '#08a05c',
    fontFamily: 'Ringside Wide Med,sans-serif',
  },
  secure: {
    display: 'block',
    width: '90%',
    height: 'auto',
    margin: '20px auto 0',
  },
});
export default customAboutGrid;
