import { makeStyles } from '@material-ui/core/styles';

const carouselStyle = makeStyles({
  root: {
    height: '214px',
  },

  'slick-slider': {
    direction: 'ltr',
    unicodeBidi: 'isolate',
    borderTop: '1px solid',
    borderTopColor: '#FAFAFA',
  },

  'slick-list': {
    overflow: 'hidden',
  },

  'slick-track': {
    borderBottom: '1px solid',
    borderBottomColor: '#E7E8E8',
    display: 'flex',
    flexDirection: 'row',
    width: '27965px',
    opacity: '1',
  },

  'slick-slide': {
    outline: 'none',
    width: '100vw',
  },

  'banner-container': {
    height: '188px',
    width: '100%',
    userSelect: 'none',
    cursor: 'pointer',
  },

  'banner-inner-container': {
    height: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
  },

  tile: {
    backgroundRepeat: 'repeat-x',
    WebkitBackgroundSize: 'contain',
    backgroundSize: 'contain',
    height: '100%',
    WebkitBoxFlex: '1',
    WebkitFlexGrow: '1',
    MsFlexPositive: '1',
    flexGrow: '1',
  },

  'tile-left': {
    backgroundPositionX: 'right',
  },

  'tile-right': {
    marginLeft: '-1px',
  },

  'image-container': {
    height: '100%',
  },

  'banner-image': {
    height: '100%',
    width: 'auto',
    '& img': {
      borderStyle: 'none',
      display: 'block',
      verticalAlign: 'middle',
      height: 'auto',
      maxHeight: '100%',
      maxWidth: 'none',
    },
  },

  'indicator-icon-button': {
    width: '8px',
    height: '8px',
    opacity: '0.3',
    borderRadius: '4px',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0.25rem',
    marginRight: '0.25rem',
    background: '#000000',
    fontSize: '12px',
  },

  'indicator-container': {
    style: {
      marginTop: '1rem',
    },
  },
});

export default carouselStyle;
