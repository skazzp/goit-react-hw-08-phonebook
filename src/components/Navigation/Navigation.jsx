import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/selectors';
import { AuthBox, Header, HeaderBox, Link, Title } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return (
    <Header>
      <HeaderBox>
        <Title>PhoneBook</Title>
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
      </HeaderBox>
    </Header>
  );
};

export default Navigation;
