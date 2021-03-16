import { makeStyles } from '@material-ui/core/styles';

const carouselStyle = makeStyles({
  root: {
    height: '214px',
  },

  container: {
    direction: 'ltr',
    unicodeBidi: 'isolate',
    borderTop: '1px solid',
    borderTopColor: '#FAFAFA',
  },

  'slide-images': {
    overflow: 'hidden',
  },

  'slide-track': {
    borderBottom: '1px solid',
    borderBottomColor: '#E7E8E8',
    display: 'flex',
    flexDirection: 'row',
    width: '24675px',
    opacity: '1',
    transform: 'translate3d(-1645px, 0px, 0px)',
  },
});

export default carouselStyle;
