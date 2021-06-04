import { makeStyles } from '@material-ui/core/styles';

const buyingContainerStyle = makeStyles({
  root: {
    marginTop: "-20px",
    padding: "15px",
  },

  dataGrid:
    {
      '& .padding-right': {
        paddingRight: 10,
      },
    },

  columnHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
  },

});
export default buyingContainerStyle;
