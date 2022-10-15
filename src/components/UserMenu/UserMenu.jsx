import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import authSelectors from 'redux/selectors';
import { UserBox, Logout, Text } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <UserBox>
      <Text>
        Добро пожаловать, <b>{name}</b>!
      </Text>
      <Logout onClick={() => dispatch(logout())}>Logout</Logout>
    </UserBox>
  );
};

export default UserMenu;
