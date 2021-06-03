// @material-ui/icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
// components
import ProfileContainer from './options_container/profile';
import BuyingContainer from './options_container/buying';

export default [
  {
    path: '/profile',
    name: 'Profile',
    icon: PersonIcon,
    component: ProfileContainer,
  },
  {
    path: '/buying',
    name: 'Buying',
    icon: ShoppingCartIcon,
    component: BuyingContainer,
  },
];
