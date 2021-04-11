import { makeStyles } from '@material-ui/core/styles';

const productInfoStyle = makeStyles(() => ({
  root: {
    marginTop: '20px',
    display: 'flex',
  },

  detail_column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexFlow: 'row wrap',
    width: '30%',
    marginRight: '5%',

    '& .detail': {
      letterSpacing: '1px',
      marginLeft: '0',
      fontSize: '16px',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      overflow: 'hidden',
      marginBottom: '10px',
    },
  },

  description: {
    width: '65%',
    marginBottom: '20px',
    fontSize: '15px',
  },
}));

export default productInfoStyle;
