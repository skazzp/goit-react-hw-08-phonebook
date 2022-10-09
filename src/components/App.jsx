import { Routes, Route } from 'react-router';
import Navigation from './Navigation/Navigation';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
// "name": "react-homework-template",
// "homepage": "https://skazzp.github.io/goit-react-hw-08-phonebook/",
