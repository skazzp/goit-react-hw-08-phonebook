import { Routes, Route } from 'react-router';
import Navigation from './Navigation/Navigation';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/selectors';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/operations';

const App = () => {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      {isLoggedIn ? (
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
      )}
    </>
  );
};

export default App;

/* Navigate */

/* <Routes>
  <Route path="/registration" element={<Registration />} />
  <Route path="/login" element={<Login />} />
  <Route path="/contacts" element={<Contacts />} />
  <Route path="*" element={<Registration />} />
</Routes> */
