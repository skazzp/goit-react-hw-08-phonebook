import { Routes, Route, Navigate } from 'react-router';
import Navigation from './Navigation/Navigation';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/selectors';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/operations';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<PublicRoute component={<Login />} />}
          />
          <Route
            path="/register"
            element={<PublicRoute component={<Registration />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} />}
          />
          <Route
            path="*"
            element={<PublicRoute component={<Navigate to="/login" />} />}
          />
        </Routes>
      )}
    </>
  );
};

export default App;

// const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
/* {isLoggedIn ? (
  <Routes>
    <Route path="/contacts" element={<Contacts />} />
    <Route path="*" element={<Contacts />} />
  </Routes>
) : (
  <Routes>
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Registration />} />
  </Routes>
)} */
