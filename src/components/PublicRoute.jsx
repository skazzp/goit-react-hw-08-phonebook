import authSelectors from 'redux/selectors';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component }) => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return !isLoggedIn ? component : <Navigate to="/contacts" />;
};
