import { makeStyles } from '@material-ui/core/styles';

const accountTemplateStyle = makeStyles({
  root: {
    position: "relative",
    minHeight: "100vh",
  },

  shadow: {
    height: '20px',
    background: 'linear-gradient(#e5e5e5,#f5f5f5,#fff,#fff)',
    backgroundColor: '#fff',

    '& @media (max-width:767px)': {
      background: '0 0',
      height: '0',
    },
  },

});
export default accountTemplateStyle;
