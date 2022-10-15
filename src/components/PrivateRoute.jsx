import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/selectors';

export const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  return isLoggedIn ? component : <Navigate to="/login" />;
};
