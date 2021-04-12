import { makeStyles } from '@material-ui/core/styles';

const cardStyle = makeStyles({
  root: {
    border: '#fafafa 2px solid',
    borderRadius: '3px',
    width: '100%',
    // minWidth: 215,
    minWidth: (props) => (props.minWidth ? props.minWidth : "none"),
    marginRight: 20,
  },
  media: {
    paddingTop: '56.25%',
  },
  cardContent: {
    backgroundColor: '#fafafa',
    padding: '0.5rem',
  },
  smallImg: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    position: "absolute",
    left: "80%",
    top: "0px",
  },
});

export default cardStyle;
