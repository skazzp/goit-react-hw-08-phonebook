import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import authSelectors from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
