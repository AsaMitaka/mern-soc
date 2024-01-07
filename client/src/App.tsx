import { Route, Routes } from 'react-router-dom';
import { About, Home, Login, Register, Profile } from './pages';
import PrivateRoute from './utils/privateroute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
