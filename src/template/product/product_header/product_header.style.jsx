import { makeStyles } from '@material-ui/core/styles';

const productHeaderStyle = makeStyles((theme) => ({
  routes_breadcrumbs_container: {
    margin: '1rem 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'default',

    '& @media (max-width:991px)': {
      width: '100%',
    },

    '& @media (max-width:767px)': {
      flexFlow: 'row wrap',
      justifyContent: 'center',
      margin: '30px 0',
    },

    '& @media (min-width:768px) and (max-width:768px)': {
      marginTop: '30px',
    },
  },

  info_container: {
    marginTop: '5px',
    color: '#999',
    display: 'inline',
  },

  info_breadcrumbs: {
    color: '#444',
    display: 'block',
    marginTop: '5px',
  },

  separator: {
    fontWeight: '700',
    padding: '0 10px',
    margin: '0',
  },

  market_summary: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '40px',
  },

  options: {
    paddingRight: '25px',
    borderRight: '1px solid #ccc',
    marginBottom: '20px',
    position: 'relative',
    letterSpacing: '-.5px',
  },

  activate_button: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamilies.light,
    padding: '0',
    fontSize: '27px',
    letterSpacing: '-0.5px',
    pointerEvents: 'none',
  },

  end_icon: {
    marginLeft: '13px',
    marginRight: '-2px',
  },

  all_size_container: {
    display: 'table',
    height: '0',
    padding: '2.5px',
    top: '135%',
    width: '343px',
    transition: 'visibility .2s ease-out,opacity .2s linear',
  },

  dropdown_header: {
    display: 'flex',
    WebkitFlexDirection: 'row',
    MsFlexDirection: 'row',
    flexDirection: 'row',
    WebkitBoxPack: 'justify',
    WebkitJustifyContent: 'space-between',
    justifyContent: 'space-between',
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingTop: '14px',
    margin: '0 -1px',
  },

  grid_container: {
    // height: '372px',
    overflow: 'auto',
  },

  item: {
    background: '#fff',
    cursor: 'pointer',
    padding: '6px',
    textAlign: 'center',
    height: '70px',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
  },

  size_paper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  size_chart_header: {
    display: 'flex',
    WebkitFlexDirection: 'row',
    MsFlexDirection: 'row',
    flexDirection: 'row',
    WebkitBoxPack: 'justify',
    WebkitJustifyContent: 'space-between',
    justifyContent: 'space-between',
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingTop: '14px',
    margin: '0 -1px',
  },

  buy_button_container: {
    padding: '0 20px',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-around',

    '& a': {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 'auto',
      borderRadius: '5px',
      width: '100%',
      cursor: 'pointer',

      '& .divider': {
        borderLeft: '1px solid #fff',
        alignSelf: 'stretch',
        margin: '0 13px',
        borderLeftColor: '#206c16',
      },
    },
  },
}));

export default productHeaderStyle;
