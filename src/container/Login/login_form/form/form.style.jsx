import { makeStyles } from '@material-ui/core/styles';

const formStyle = makeStyles({
  login_body: {
    border: 'none',

    '@media (min-width: 768px)': {
      background: '#fff',
      border: 'solid 1px #e0e0e0',
      borderRadius: '4.5px',
    },
  },

});

export default formStyle;
