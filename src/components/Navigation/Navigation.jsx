import UserMenu from '../UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return (
    <header>
      {!isLoggedIn ? (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      ) : (
        <UserMenu />
      )}
    </header>
  );
};

export default Navigation;
