import { makeStyles } from '@material-ui/core/styles';

const productMediaStyle = makeStyles(() => ({
  root: {
    marginTop: '25px',
    marginBottom: '40px',
    minHeight: '400px',
    textAlign: 'center',
  },

  image_container: {
    minHeight: '400px',

    '& .inner': {
      height: '100%',

      '& .image': {
        width: '80%',

      },
    },

  },
}));

export default productMediaStyle;
