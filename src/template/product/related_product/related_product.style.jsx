import { makeStyles } from '@material-ui/core/styles';

const relatedProductStyle = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    marginBottom: '20px',
    borderTop: '1px solid #cecece',
    borderBottom: '1px solid #cecece',
  },

  banner_container: {
    marginRight: '-15px',
    marginLeft: '-15px',

    '& .inner': {
      position: 'relative',
      minHeight: '1px',
      paddingRight: '15px',
      paddingLeft: '15px',
      float: 'left',
      width: '100%',
      textAlign: 'center',
    },
  },

  banner: {
    lineHeight: '1.1',
    marginTop: '11px',
    color: '#fff',
    display: 'inline-block',
    padding: '12px 20px',
    position: 'relative',
    backgroundColor: '#2e2e2e',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontSize: '16px',
    top: '-16px',
    marginBottom: '0',

    '&:before': {
      content: '" "',
      width: '0',
      height: '0',
      borderColor: 'transparent transparent #000',
      borderStyle: 'solid',
      borderWidth: '0 0 6px 6px',
      left: '-5px',
      position: 'absolute',
      top: '0',
    },
  },

  slider_container: {
    position: 'relative',
  },

  slick_list: {
    // overflow: 'hidden',

    '& .slick_tract': {
      transform: 'translate3d(0px, 0px, 0px)',
      width: '3420px',
    },
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default relatedProductStyle;
