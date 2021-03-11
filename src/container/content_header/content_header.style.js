import { makeStyles } from '@material-ui/core/styles';

const contentHeaderStyle = makeStyles({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#000',
    textAlign: 'center',
    backgroundImage: (props) => props.bgImage,
    backgroundPosition: 'bottom',
    height: '520px',
    marginTop: '0px',
    paddingTop: '111px',
  },

});

export default contentHeaderStyle;
