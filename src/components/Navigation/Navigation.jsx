import UserMenu from '../UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <NavLink to={'/'}>Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <UserMenu />
    </header>
  );
};

export default Navigation;
