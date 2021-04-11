import { makeStyles } from '@material-ui/core/styles';

const authenStyle = makeStyles({
  root: {
    width: '100%',
    marginBottom: '16px',
    '& label': {
      fontSize: '14px',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, 3px) scale(0.75)',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    '& legend': {
      display: 'none',
    },
  },
  main: {
    backgroundColor: '#fafafa',
    width: '100vw',
    height: '100vh',
  },
  alertStyle: {
    backgroundColor: '#fff3f3',
    marginTop: '20px',
  },
});

export default authenStyle;
