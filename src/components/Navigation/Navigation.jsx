import UserMenu from '../UserMenu/UserMenu';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/selectors';
import { AuthBox, Header, Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return (
    <Header>
      <h1>PhoneBook</h1>
      {!isLoggedIn ? (
        <>
          <AuthBox>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </AuthBox>
        </>
      ) : (
        <UserMenu />
      )}
    </Header>
  );
};

export default Navigation;
